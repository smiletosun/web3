module smile::my_coin {
  use sui::coin;
  use sui::coin::{TreasuryCap, Coin};

  public struct MY_COIN has drop {}

  fun init(witness: MY_COIN, ctx: &mut TxContext) {
    let (treasury_cap, metadata) = coin::create_currency(witness, 2, b"sb", b"SB", b"傻币",  option::none(), ctx);

    transfer::public_freeze_object(metadata);
    transfer::public_transfer(treasury_cap, tx_context::sender(ctx));
  }

  public fun mint(
        treasury_cap: &mut sui::coin::TreasuryCap<MY_COIN>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext
    ) {
        coin::mint_and_transfer(treasury_cap, amount, recipient, ctx);
    }

    public fun burn(treasury_cap: &mut TreasuryCap<MY_COIN>, coin: Coin<MY_COIN>) {
        coin::burn(treasury_cap, coin);
    }
}
