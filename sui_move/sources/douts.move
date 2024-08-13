module sui_move::donuts {
  use sui::sui::SUI;
  use sui::coin::Coin;
  use sui::balance::{Self, Balance};

  const ENotEnough: u64 = 0;

  public struct Donut has key {
    id: UID,
  }

  public struct DonutShop has key, store {
    id: UID,
    price: u64,
    balance: Balance<SUI>
  }

  fun init(ctx: &mut TxContext) {
    transfer::share_object(DonutShop {
            id: object::new(ctx),
            price: 1000,
            balance: balance::zero()
        })
  }
}
