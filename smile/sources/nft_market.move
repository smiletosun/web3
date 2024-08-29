module smile::nft_market {
    use sui::package;

    public struct NFT_MARKET has drop {}

    fun init(otw: NFT_MARKET, ctx: &mut TxContext) {
        package::claim_and_keep(otw, ctx);
    }
}
