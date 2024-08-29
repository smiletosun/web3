module smile::rock_paper_scissors {
    use std::string;

    #[error]
    const ENOT_PLAYER: u8 = 0;

    public struct Game has key, store {
        id: UID,
        player_one: address,
        player_two: address,
        winner: Option<address>,
        prize: Prize,
        admin: address,
        gestures: vector<PlayerTurn>,
    }

    public struct PlayerTurn has store, drop, copy {
        address: address,
        gesture: string::String,
    }

    public struct Prize has key, store {
        id: UID,
    }

    public struct PlayerTurnCap has key, store {
        id: UID,
        player_one: address,
        player_two: address,
        game_id: ID,
    }

    public entry fun create(
        player_one: address,
        player_two: address,
        ctx: &mut TxContext
    ) {
        let game = Game {
            id: object::new(ctx),
            player_one: player_one,
            player_two: player_two,
            winner: option::none(),
            prize: Prize {id: object::new(ctx),},
            gestures: vector[],
            admin: ctx.sender()
        };

        transfer::transfer(
            PlayerTurnCap {
                id: object::new(ctx),
                player_one: player_one,
                player_two: player_two,

                game_id: game.id.to_inner(),
            },
            ctx.sender()
        );

        transfer::transfer(game, ctx.sender());
    }

    public fun player_turn(
        cap: &mut PlayerTurnCap,
        game: &mut Game,
        gesture: string::String,
        ctx: &mut TxContext
    ) {
        let sender = ctx.sender();
        assert!(
            cap.player_one == sender || cap.player_two == sender,
            ENOT_PLAYER
        );
        // 判断是否已经发送过了
        let sendTurn = game.gestures.count!(|gesture| gesture.address == sender);
        assert!(sendTurn != 0, ENOT_PLAYER);

        let player = PlayerTurn {
            address: sender,
            gesture: gesture,
        };

        game.gestures.push_back(player);
    }

    public fun endGame(game: Game, ctx:&mut TxContext) {
        let Game {
            id,
            player_one,
            player_two,
            winner:_,
            prize,
            admin,
            gestures,
        } = game;

        let p1_wins = play(gestures[0].gesture, gestures[1].gesture);

        let p2_wins = play(gestures[1].gesture, gestures[0].gesture);

        object::delete(id);

         if (p1_wins) {
            transfer::public_transfer(prize, player_one)
        } else if (p2_wins) {
            transfer::public_transfer(prize, player_two)
        } else {
            transfer::public_transfer(prize, admin)
        }
    }


    fun play(one: string::String, two: string::String): bool {
      let rock = string::utf8(b"ROCK");
      let paper = string::utf8(b"PAPER");
      let scissors = string::utf8(b"SCISSORS");

        if(one == rock && two == scissors) { true }
      else if (one == paper && two == rock) { true }
      else if (one == scissors && two == paper) { true }
      else { false }
    }
}
