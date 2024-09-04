module smile::coffe {
    use sui::balance::{ Balance };
    use sui::sui::{ SUI };
    use sui::coin;
    use sui::table::{Self, Table};

    const EInvalidSuiAmount: u64 = 0;

    #[error]
    const ENotYourCard: vector<u8> = b"Not your card";

    #[error]
    const ECardNotFound: vector<u8> = b"Cant not find card";

    public struct Cafe has key, store {
        id: UID,
        owner: address,
        sui: Balance<SUI>,
        // Card 与 用户的关系
        member_card: Table<ID, address>,
        count: u64,
    }

    // 咖啡券
    public struct Card has key, store {
        id: UID,
        cafe_id: ID,
        lucky_number: u64,
    }

    // 咖啡实体
    public struct Coffee has key, store {
        id: UID,
        cafe_id: ID,
    }

    // 咖啡馆权限
    public struct AdminCap has key, store {
        id: UID,
        cafe_id: ID,
        count: u64,
    }

    // 创建咖啡馆
    public entry fun create_cafe(
        amount: coin::Coin<SUI>,
        ctx: &mut TxContext
    ) {
        let cafe = Cafe {
            id: object::new(ctx),
            owner: ctx.sender(),
            sui: amount.into_balance(),
            member_card: table::new(ctx),
            count: 0
        };

        let adminCap = AdminCap {
            id: object::new(ctx),
            cafe_id: cafe.id.uid_to_inner(),
            count: 0
        };

        let sender = ctx.sender();

        transfer::public_transfer(adminCap, sender);
        transfer::public_transfer(cafe, sender)
    }

    public entry fun buy_cafe_card(
        cafe: &mut Cafe,
        sui: coin::Coin<SUI>,
        ctx: &mut TxContext
    ) {
        let amount = sui.value();
        assert!(amount % 5 == 0, EInvalidSuiAmount);
        // 把钱存入咖啡馆账户
        let balance = coin::into_balance(sui);
        cafe.sui.join(balance);

        let customer = ctx.sender();
        let mut card_count = amount / 5;

        while (card_count > 0) {
            let card = create_card(cafe, ctx);
            card_count = card_count - 1;
            cafe.member_card.add(card.id.uid_to_inner(), customer);
            transfer::public_transfer(card, customer);
        }
    }

    public entry fun buy_coffee(
        cafe: &mut Cafe,
        card: Card,
        ctx: &mut TxContext
    ) {
        assert!(
            cafe.member_card.contains(card.id.uid_to_inner()),
            ECardNotFound
        );

        let customer = ctx.sender();
        let card_owner = cafe.member_card.borrow(card.id.uid_to_inner());
        assert!(customer == card_owner, ENotYourCard);

        // 移除 card
        cafe.member_card.remove(card.id.uid_to_inner());
        burn_card(card);

        let coffee = create_coffee(cafe, ctx);
        transfer::public_transfer(coffee, customer);
    }

    fun create_coffee(cafe: &mut Cafe, ctx: &mut TxContext): Coffee {
        let coffee = Coffee {
            id: object::new(ctx),
            cafe_id: cafe.id.uid_to_inner(),
        };

        cafe.count = cafe.count + 1;
        coffee
    }

    fun create_card(cafe: &Cafe, ctx: &mut TxContext): Card {
        let card = Card {
            id: object::new(ctx),
            cafe_id: cafe.id.uid_to_inner(),
            lucky_number: 0,
        };

        card
    }

    fun burn_card(card: Card) {
        let Card {id, cafe_id: _, lucky_number: _} = card;
        object::delete(id);
    }

    // 管理员才能提现
    public fun withdraw(
        _: &AdminCap,
        cafe: &mut Cafe,
        ctx: &mut TxContext
    ) {
        let coin = cafe.sui.withdraw_all();

        transfer::public_transfer(
            coin::from_balance(coin, ctx),
            ctx.sender()
        );
    }
}
