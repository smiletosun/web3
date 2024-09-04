/**
    去中心化自由职业市场是一个基于SUI区块链的智能合约平台，使雇主和自由职业者能够进行无需信任的交易。
    该平台利用Move语言开发智能合约，提供创建自由职业项目（freelance gigs）、处理付款、争议解决和各种其他功能。
**/

module smile::freelance {
    use sui::sui::SUI;
    use sui::coin::{ Self };
    use sui::balance::{Self, Balance};

    const EInvalidBid: u64 = 0;
    const EInvalidWork: u64 = 1;
    const ENotFreelancer: u64 = 2;
    const ENotClient: u64 = 3;
    const EInvalidWithdrawal: u64 = 4;

    public struct Freelance has key, store {
        id: UID,
        client: address,
        freelancer: address,
        description: vector<u8>,
        price: u64,
        escrow: Balance<SUI>,
        workSubmitted: bool,
        dispute: bool,
    }

    // #region 雇员
    // 提交工作

    // 参加
    public fun signFreelace(
        freelance: &mut Freelance,
        ctx: &mut TxContext
    ) {
        assert!(
            freelance.freelancer == @0x0,
            EInvalidBid
        );
        freelance.freelancer = ctx.sender()
    }

    public fun submit_work(
        freelance: &mut Freelance,
        ctx: &mut TxContext
    ) {
        assert!(
            freelance.freelancer == ctx.sender(),
            EInvalidWork
        );

        freelance.workSubmitted = true;
    }

    // 取消工作
    public fun cancel(
        freelance: &mut Freelance,
        ctx: &mut TxContext
    ) {
        let sender = ctx.sender();
        assert!(
            freelance.freelancer == sender,
            ENotFreelancer
        );

        assert!(
            freelance.client == sender,
            ENotClient
        );

        if (freelance.freelancer != @0x0 && freelance.workSubmitted == false && freelance.dispute == false) {
            let amount = balance::value(&freelance.escrow);
            let take_coin = sui::coin::take(&mut freelance.escrow, amount, ctx);
            transfer::public_transfer(take_coin, freelance.client);
        };

        freelance.reset();
    }

    // 领取薪水
    public fun withdraw_earnings(
        freelance: &mut Freelance,
        amount: u64,
        ctx: &mut TxContext
    ) {
        let recipient = tx_context::sender(ctx);
        assert!(
            freelance.freelancer == recipient,
            ENotFreelancer
        );
        let take_coin = sui::coin::take(&mut freelance.escrow, amount, ctx);
        transfer::public_transfer(take_coin, freelance.freelancer)
    }

    // #endregion

    // #region 雇主
    public fun create_freelance(
        description: vector<u8>,
        price: u64,
        ctx: &mut TxContext
    ) {
        let gig_id = object::new(ctx);

        transfer::share_object(
            Freelance {
                id: gig_id,
                client: tx_context::sender(ctx),
                freelancer: @0x0,
                description: description,
                price: price,
                escrow: balance::zero<SUI>(),
                workSubmitted: false,
                dispute: false,
            }
        );
    }

    public fun add_funds(
        freelance: &mut Freelance,
        payment: sui::coin::Coin<SUI>,
        ctx: &mut TxContext
    ) {
        assert!(
            ctx.sender() != freelance.client,
            ENotClient
        );
        coin::put(&mut freelance.escrow, payment)
    }

    public fun request_funds(
        freelance: &mut Freelance,
        ctx: &mut TxContext
    ) {
        assert!(
            ctx.sender() != freelance.client,
            ENotClient
        );

        assert!(
            freelance.workSubmitted == false,
            EInvalidWithdrawal
        );
        let amount = freelance.escrow.value();
        let take_coin = coin::take(&mut freelance.escrow, amount, ctx);
        transfer::public_transfer(take_coin, freelance.client);

        // Reset
        freelance.reset();
    }

    // 发放薪水
    public fun release(
        freelance: &mut Freelance,
        ctx: &mut TxContext
    ) {
        assert!(
            freelance.client == tx_context::sender(ctx),
            ENotFreelancer
        );

        assert!(
            freelance.workSubmitted && !freelance.dispute,
            EInvalidWork
        );
        let amount = freelance.escrow.value();
        let taoke_coin = coin::take(&mut freelance.escrow, amount, ctx);
        transfer::public_transfer(taoke_coin, freelance.freelancer);
    }

    // #endregion

    // #region 公用
    // 争议
    public fun dispute(
        freelance: &mut Freelance,
        ctx: &mut TxContext
    ) {
        freelance.is_freelancer_or_client(ctx);
        freelance.dispute = true;
    }

    // 争议
    public fun resolve_dispute(
        freelance: &mut Freelance,
        ctx: &mut TxContext
    ) {
        freelance.is_freelancer_or_client(ctx);
        freelance.dispute = false;
    }

    // #endregion

    fun reset(freelance: &mut Freelance) {
        freelance.freelancer = @0x0;
        freelance.workSubmitted = false;
        freelance.dispute = false;
    }

    fun is_freelancer_or_client(
        freelance: &Freelance,
        ctx: &TxContext
    ) {
        assert!(
            freelance.client == ctx.sender(),
            ENotFreelancer
        );
        assert!(
            freelance.freelancer == ctx.sender(),
            EInvalidWork
        );
    }
}
