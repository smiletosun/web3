module smile::dynamic_fields {
  use sui::dynamic_field;
  use sui::dynamic_object_field;

  public struct Person has key {
    id: UID,
  }

  public struct Hat has key, store { id: UID, color: u32 }
  public struct Mustache has key, store { id: UID }

  public fun createPerson(ctx: &mut TxContext) {
    let person = Person {
      id: object::new( ctx),
    };


    transfer::transfer(person, ctx.sender());
  }

  #[test]
  fun test() {
    let mut ctx = tx_context::dummy();
    let mut person = Person {
      id: object::new(&mut ctx)
    };

    let hat = Hat {
      id: object::new(&mut ctx),
      color: 0x1234,
    };

    dynamic_field::add(&mut person.id, b"hat", hat);
    assert!(dynamic_field::exists_(&person.id, b"hat"), 0);
    transfer::transfer(person, ctx.sender());
  }
}
