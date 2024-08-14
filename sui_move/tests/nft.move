#[test_only]
module sui_move::nft_test {
    use sui_move::{Nft};

    #[test]
    fun test_create_nft() {
        let mut ctx = tx_context::dummy();

        Nft::mintToSender(
          b"Sword".to_string(),
          b"A sword".to_string(),
          b"https://example.com/sword.png".to_string(),
          &mut ctx
        );
    }
}
