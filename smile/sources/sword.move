module smile::sword {

  public struct Sword has key, store {
    id: UID,
    magic: u64,
    strength: u64,
  }

  public struct Forge has key {
    id: UID,
    swords_created: u64,
  }

  fun init(ctx: &mut TxContext) {
    let admin = Forge {
      id: object::new(ctx),
      swords_created: 0,
    };

    transfer::transfer(admin, ctx.sender());
  }

  public fun magic(self: &Sword): u64 {
    self.magic
  }

  public fun strength(self: &Sword): u64 {
    self.strength
  }

  public fun swords_created(self: &Forge): u64 {
      self.swords_created
  }

  public fun sword_create(magic: u64, strength: u64, ctx: &mut TxContext): Sword {
    Sword {
        id: object::new(ctx),
        magic: magic,
        strength: strength,
    }
  }

  #[test]
  fun test() {
    let mut ctx = tx_context::dummy();
    let sword = sword_create(100, 100,  &mut ctx);
    assert!(sword.magic() == 100 && sword.strength() == 100, 1);
    let dummy_address = @0xCAFE;

    // assert_eq!(ctx.sender(), dummy_address, 2);

    transfer::public_transfer(sword, dummy_address);
  }
}
