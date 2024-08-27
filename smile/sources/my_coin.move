module smile::my_coin {
  use sui::coin;
  use sui::coin::{TreasuryCap, Coin};

  #[test_only]
  use sui::test_scenario::{Self, next_tx, ctx};

  public struct MY_COIN has drop {}

  fun init(witness: MY_COIN, ctx: &mut TxContext) {
    let (treasury_cap, metadata) = coin::create_currency(witness, 2, b"sb", b"SB", b"傻币",  option::none(), ctx);
    transfer::public_freeze_object(metadata);
    transfer::public_transfer(treasury_cap, tx_context::sender(ctx));
  }

  public entry fun mint(
      treasury_cap: &mut TreasuryCap<MY_COIN>,
      amount: u64,
      ctx: &mut TxContext
  ) {
      let address = tx_context::sender(ctx);
      std::debug::print(&address);
      std::debug::print(&amount);
      coin::mint_and_transfer(treasury_cap, amount, address, ctx);
  }

  public entry fun burn(treasury_cap: &mut TreasuryCap<MY_COIN>, coin: Coin<MY_COIN>) {
      coin::burn(treasury_cap, coin);
  }

  #[test_only]
  public fun test_init(ctx: &mut TxContext) {
      init(MY_COIN {}, ctx);
  }

   #[test]
  fun mint_burn() {
      // Initialize a mock sender address
      let addr1 = @0xA;

      // Begins a multi transaction scenario with addr1 as the sender
      let mut scenario = test_scenario::begin(addr1);

      // Run the coin module init function
      {
          test_init(ctx(&mut scenario))
      };

      // Mint a `Coin<MY_COIN>` object
      next_tx(&mut scenario, addr1);
      {
          let mut treasurycap = test_scenario::take_from_sender<TreasuryCap<MY_COIN>>(&scenario);
          mint(&mut treasurycap, 100, test_scenario::ctx(&mut scenario));
          test_scenario::return_to_address<TreasuryCap<MY_COIN>>(addr1, treasurycap);
      };

      // Burn a `Coin<MY_COIN>` object
      next_tx(&mut scenario, addr1);
      {
          let coin = test_scenario::take_from_sender<Coin<MY_COIN>>(&scenario);
          let mut treasurycap = test_scenario::take_from_sender<TreasuryCap<MY_COIN>>(&scenario);
          burn(&mut treasurycap, coin);
          test_scenario::return_to_address<TreasuryCap<MY_COIN>>(addr1, treasurycap);
      };

      // Cleans up the scenario object
      test_scenario::end(scenario);
  }
}
