/**
        SUID简单流动性质押池（SUID - Staking Pool Module）

        实现功能：
        1. SUID模块是一个简单的流动性质押池，用户可以质押SUI并获得SUID代币
        2. 用户可以质押SUI到指定的验证器，或从从指定验证器解除质押
*/

module smile::suid {
    use sui::balance::{Self, Balance};
    use sui::coin::{ Self };
    use sui::sui::{ SUI };
    use sui_system::sui_system::{Self, SuiSystemState};
    use sui_system::staking_pool::{ StakedSui };

    const FLOAT_SCALING: u64 = 1000000000;
    const EAmountTooLow: u64 = 1;

    public struct SUID has drop {}

    public struct Pool has key {
        id: UID,
        sui: Balance<SUI>,
        treasury: coin::TreasuryCap<SUID>,
    }

    fun init(otw: SUID, ctx: &mut TxContext) {
        let (treasury, metadata) = coin::create_currency(
            otw,
            9,
            b"SUID",
            b"Dacade Staked SUI",
            b"SUID is a Decade Staked SUI",
            option::none(),
            ctx
        );

        // Make metadata immutable
        transfer::public_freeze_object(metadata);

        // Create the shared pool
        transfer::share_object(
            Pool {
                id: object::new(ctx),
                sui: balance::zero<SUI>(),
                treasury,
            }
        );
    }

    // 添加流动性
    public fun add_liquidity(
        pool: &mut Pool,
        amount: coin::Coin<SUI>,
        ctx: &mut TxContext
    ) {
        let coin = create_coin_suid(pool, amount, ctx);
        transfer::public_transfer(coin, ctx.sender());
    }

    // 移除流动性
    public fun remove_liquidity(
        pool: &mut Pool,
        amount: coin::Coin<SUID>,
        ctx: &mut TxContext
    ) {
        let sui_coin = burn_coin_suid(pool, amount, ctx);
        transfer::public_transfer(sui_coin, ctx.sender());
    }

    //质押SUI到指定的验证者
    public fun stake_to_validator(
        sui: coin::Coin<SUI>,
        state: &mut SuiSystemState,
        validator_address: address,
        ctx: &mut TxContext
    ) {
        sui_system::request_add_stake(state, sui, validator_address, ctx);
    }

    // 从指定的验证者解除质押
    public fun unstake_from_validator(
        state: &mut SuiSystemState,
        staked_sui: StakedSui,
        ctx: &mut TxContext,
    ) {
        sui_system::request_withdraw_stake(state, staked_sui, ctx);
    }

    // 通过 sui 兑换 Coin<SUID>
    fun create_coin_suid(
        pool: &mut Pool,
        amount: coin::Coin<SUI>,
        ctx: &mut TxContext
    ): coin::Coin<SUID> {

        let sui_balance = amount.into_balance();
        let sui_added = sui_balance.value();

        is_valid_amount(&sui_balance);

        let suid_balance = coin::supply_mut(&mut pool.treasury).increase_supply(sui_added);
        pool.sui.join(sui_balance);

        coin::from_balance(suid_balance, ctx)
    }

    // 通过 SUID 兑换 Coin<SUI>
    fun burn_coin_suid(
        pool: &mut Pool,
        coin: coin::Coin<SUID>,
        ctx: &mut TxContext
    ): coin::Coin<SUI> {
        let suid_balance = coin.into_balance();
        let amount = suid_balance.value();

        balance::decrease_supply(
            pool.treasury.supply_mut(),
            suid_balance
        );

        coin::take(&mut pool.sui, amount, ctx)
    }

    fun is_valid_amount(amount: &Balance<SUI>) {
        assert!(
            amount.value() >= FLOAT_SCALING,
            EAmountTooLow
        )
    }
}
