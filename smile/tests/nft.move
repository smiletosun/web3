#[test_only]
module smile::nft_test {
    use smile::{ nft };

    #[test]
    fun test_create_nft() {
        let mut ctx = tx_context::dummy();

        nft::mintToSender(
            b"Sword".to_string(),
            b"A sword".to_string(),
            b"https://example.com/sword.png".to_string(),
            &mut ctx
        );
    }
}
