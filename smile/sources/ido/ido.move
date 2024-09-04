module smile::ido {

  public struct IDO has key, store {
    id: UID,
    owner: address,
    // 开始时间
    start: u64,
    // 结束时间
    end: u64,
    // 当前金额
    funded_amount: u64,
    // 记录当前存的资金
    balance: Table<address, Icon<SUI>>,
    // 白名单，只有白名单的人才能购买
    white_list: vector<address>,
  }


  public fun create_ido(start_time: u64, end_time: u64, white_list: vector<address>, ctx: &mut TxContext) {

  }

  public fun fund_ido() {

  }

  public fun transfer_ido_funds() {

  }
}
