module smile::otm {

  public struct Book {}

  public struct OTM has drop {}

  fun init(otw: OTM, ctx: &mut TxContext) {
    let publisher = sui::package::claim(otw, ctx);
    transfer::public_transfer(publisher, ctx.sender());
  }
}
