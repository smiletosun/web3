module sui_move::example {
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
}
