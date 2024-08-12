#[test_only]
module sui_move::example_test {
    use sui_move::example::{sword_create};

    #[test]
    fun test_create_sword() {
        let mut ctx = tx_context::dummy();
        let sword = sword_create( 42, 7, &mut ctx);
        assert!(sword.magic() == 42 && sword.strength() == 7, 1);
        let dummy_address = @0xCAFE;
        transfer::public_transfer(sword, dummy_address);
    }
}
