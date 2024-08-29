module smile::nft {
    use std::string;
    use sui::display;
    use sui::package;
    use sui::event;

    public struct Nft has key, store {
        id: UID,
        name: string::String,
        description: string::String,
        url: string::String,
        address: address,
    }

    public struct NFT has drop {}

    public struct NftMintEvent has copy, drop {
        object_id: ID,
        from: address,
        to: address,
        name: string::String,
    }

    public struct NftTransferEvent has copy, drop {
        object_id: ID,
        from: address,
        to: address,
    }

    fun init(otw: NFT, ctx: &mut TxContext) {
        let publisher = package::claim(otw, ctx);
        let mut display = display::new<Nft>(&publisher, ctx);

        display.add(
            b"name".to_string(),
            b"{name}".to_string()
        );
        display.add(
            b"description".to_string(),
            b"{description}".to_string()
        );
        display.add(
            b"url".to_string(),
            b"{url}".to_string()
        );
        display.add(
            b"creator".to_string(),
            b"{creator}".to_string()
        );

        display.update_version();

        transfer::public_transfer(publisher, ctx.sender());
        transfer::public_transfer(display, ctx.sender());
    }

    public fun mintToSender(
        name: string::String,
        description: string::String,
        url: string::String,
        ctx: &mut TxContext
    ) {
        let nft = Nft {
            id: object::new(ctx),
            url,
            name,
            description,
            address: ctx.sender(),
        };

        event::emit(
            NftMintEvent {
                object_id: object::id(&nft),
                name,
                from: ctx.sender(),
                to: ctx.sender(),
            }
        );

        transfer::public_transfer(nft, ctx.sender());
    }

    public fun transfer_nft(
        nft: Nft,
        to: address,
        ctx: &mut TxContext,
    ) {
        event::emit(
            NftTransferEvent {
                object_id: object::id(&nft),
                from: ctx.sender(),
                to: ctx.sender(),
            }
        );

        transfer::public_transfer(nft, to);
    }

    public fun display(nft: &Nft,) {
        // display::display(nft)
    }

    public entry fun burn(nft: Nft, _: &mut TxContext) {
        let Nft {
            id,
            name: _,
            description: _,
            url: _,
            address: _
        } = nft;

        object::delete(id)
    }
}
