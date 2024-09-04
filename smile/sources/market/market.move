module smile::market {
    use sui::bag::{Self, Bag};
    use sui::coin::{Self, Coin};
    use sui::table::{Self, Table};
    use sui::sui::{ SUI };
    use sui::dynamic_field;

    #[error]
    const NotOnwer: vector<u8> = b"Not Owner";

    #[error]
    const EAmountIncorrect: vector<u8> = b"paid not enough";

    public struct Market has key, store {
        id: UID,
        // item 列表
        items: Bag,
        // 默认只支持 SUI
        payments: Table<address, Coin<SUI>>,
    }

    public struct Item has key, store {
        id: UID,
        price: u64,
        owner: address,
    }

    public fun create_market(ctx: &mut TxContext) {
        let market = Market {
            id: object::new(ctx),
            items: bag::new(ctx),
            payments: table::new(ctx),
        };

        transfer::share_object(market)
    }

    // 上架
    public fun add_item<T: key + store>(
        market: &mut Market,
        price: u64,
        item_to_list: T,
        ctx: &mut TxContext
    ) {
        let mut item = Item {
            id: object::new(ctx),
            price: price,
            owner: ctx.sender(),
        };

        dynamic_field::add(
            &mut item.id,
            b"item".to_string(),
            item_to_list
        );

        market.items.add(item.id.to_inner(), item)
    }

    // 下架
    public fun remove_item<T: key + store>(
        market: &mut Market,
        item_id: ID,
        ctx: &mut TxContext
    ) {

        let item_brow = bag::borrow_mut<ID, Item>(&mut market.items, item_id);
        assert!(
            item_brow.owner == ctx.sender(),
            NotOnwer
        );

        // 取回 item
        let obj = dynamic_field::remove<_, T>(&mut item_brow.id, b"item");
        // 移除 bag 中的 item
        let Item {id, owner, price: _} = bag::remove<ID, Item>(&mut market.items, item_id);
        object::delete(id);
        transfer::public_transfer(obj, owner);

    }

    // 获取列表
    public fun get_list(market: &Market): &Bag {
        &market.items
    }

    // 购买
    public fun buy_item<T: key + store>(
        market: &mut Market,
        item_id: ID,
        paid: Coin<SUI>,
        ctx: &mut TxContext
    ) {
        let mut item = market.items.remove<_, Item>(item_id);
        let owner = item.owner;

        assert!(
            item.price == coin::value(&paid),
            EAmountIncorrect
        );

        assert!(ctx.sender() != item.owner, NotOnwer);

        // 存入金额
        if (market.payments.contains(owner)) {
            market.payments.borrow_mut(owner).join(paid);
        } else {
            market.payments.add(owner, paid);
        };

        // 提取真实 Iitem
        let obj = dynamic_field::remove<_, T>(&mut item.id, b"item");
        let Item {id, owner: _, price: _} = item;
        object::delete(id);

        transfer::public_transfer(obj, ctx.sender());
    }

    // 提取收益
    public fun withdraw(
        market: &mut Market,
        ctx: &mut TxContext
    ) {
        let amount = market.payments.remove(ctx.sender());
        transfer::public_transfer(amount, ctx.sender());
    }
}
