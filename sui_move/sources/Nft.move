module sui_move::Nft {
  use std::string;

  public struct Nft has key, store {
    id: UID,
    name: string::String,
    description: string::String,
    url: string::String,
  }

  public struct NftMinted has copy, drop {
    creator: address,
    name: string::String,
    url: string::String,
    description: string::String,
  }

  public fun mintToSender(
    name: string::String,
    description: string::String,
    url: string::String,
   ctx: &mut TxContext) {
    let nft = Nft {
      url,
      name,
      description,
      id: object::new(ctx),
    };

    transfer::public_transfer(nft, @sui_move);
  }

 public fun nftInfo(nft: &Nft): NftMinted {
    NftMinted {
      creator: nft.id.to_address(),
      name: nft.name,
      url: nft.url,
      description: nft.description,
    }
  }

  public entry fun burn(nft: Nft, _: &mut TxContext) {
    let Nft {id, name: _, description: _, url: _} = nft;
    object::delete(id)
  }
}
