module smile::counter {

    public struct Counter has key {
        id: UID,
        value: u256
    }

    public fun createCounter(ctx: &mut TxContext) {
        let counter = Counter {id: object::new(ctx), value: 0};

        transfer::transfer(counter, ctx.sender());
    }

    public fun addCount(counter: &mut Counter): u256 {
        counter.value = counter.value + 1;
        counter.value
    }

    public fun setValue(counter: &mut Counter, value: u256) {
        counter.value = value;
    }
}
