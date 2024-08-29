module smile::num_nft {

    const MAX_SUPPLY: u64 = 1000;
    const ETooManyNums: u64 = 1;

    public struct NumNft has key, store {
        id: UID,
        num: u64,
    }

    public struct NumIssuerCap has key {
        id: UID,
        supply: u64,
        issued_counter: u64,
    }

    public struct NUM_NFT has drop {}

    fun init(_: NUM_NFT, ctx: &mut TxContext) {
        let cap = NumIssuerCap {
            id: object::new(ctx),
            supply: 0,
            issued_counter: 0,
        };

        transfer::transfer(cap, ctx.sender());
    }

    public fun mint(
        cap: &mut NumIssuerCap,
        ctx: &mut TxContext,
    ): NumNft {
        let n = cap.issued_counter;
        cap.issued_counter = n + 1;
        cap.supply = cap.supply + 1;

        assert!(
            cap.supply <= MAX_SUPPLY,
            ETooManyNums
        );

        NumNft {id: object::new(ctx), num: n}
    }

    public fun mint_to_recipient(
        cap: &mut NumIssuerCap,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let num = mint(cap, ctx);
        transfer::public_transfer(num, recipient);
    }

    public fun burn(cap: &mut NumIssuerCap, nft: NumNft) {
        let NumNft {id, num: _} = nft;
        cap.supply = cap.supply - 1;
        object::delete(id);
    }
}
