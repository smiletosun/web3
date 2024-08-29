module smile::airdrop_nft {
    use std::string;
    use sui::random::{ Random };

    const GOLD: vector<u8> = b"gold";
    const SILVER: vector<u8> = b"silver";
    const BRONZE: vector<u8> = b"bronze";

    public struct AirdropNftTicket has key, store {
        id: UID,
    }

    public struct MetalNFT has key, store {
        id: UID,
        level: string::String,

    }

    public struct AirdropNftSystem has key, store {
        id: UID,
        // collection: ,
    }

    public struct AIRDROP_NFT has drop {}

    // 铸造权限
    public struct MintCap has key {
        id: UID,
    }

    fun init(
        _witness: AIRDROP_NFT,
        ctx: &mut TxContext
    ) {
        transfer::transfer(
            MintCap {id: object::new(ctx)},
            ctx.sender()
        );

        transfer::transfer(
            AirdropNftSystem {id: object::new(ctx)},
            ctx.sender()
        )
    }

    public fun send_tick_to_address(
        _: &MintCap,
        addresses: vector<address>,
        ctx: &mut TxContext
    ) {
        let len = addresses.length();
        let mut i = 0;
        while (i < len) {
            transfer::transfer(
                AirdropNftTicket {id: object::new(ctx)},
                addresses[i]
            );
            i = i + 1;
        };
    }

    public entry fun exchange_metal_nft(
        ticket: AirdropNftTicket,
        random: &Random,
        ctx: &mut TxContext
    ) {
        destroy_airdrop_nft(ticket);
        // sui::borrow::borrow(self)
        // let random = Random {id: object::new(ctx), inner: {}};

        let mut generator = sui::random::new_generator(random, ctx);
        let v = sui::random::generate_u8_in_range(&mut generator, 1, 100);
        let sender = ctx.sender();

        if (v <= 60) {
            transfer::public_transfer(
                MetalNFT {
                    id: object::new(ctx),
                    level: BRONZE.to_string(),
                },
                sender
            );
        }
        else if (v <= 90) {
            transfer::public_transfer(
                MetalNFT {
                    id: object::new(ctx),
                    level: SILVER.to_string(),
                },
                sender
            );
        }
        else if (v <= 100) {
            transfer::public_transfer(
                MetalNFT {
                    id: object::new(ctx),
                    level: GOLD.to_string(),
                },
                sender
            );
        };
    }

    public fun destroy_airdrop_nft(ticket: AirdropNftTicket) {
        let AirdropNftTicket { id } = ticket;
        object::delete(id);
    }
}
