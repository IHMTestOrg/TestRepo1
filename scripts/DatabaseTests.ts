@WorldTable
class PlayerTest extends DBTable {
    @PrimaryKey
    player: uint64 = 0;

    @Field
    num: uint8 = 25;

    @Field
    name: string = ""

    tempValue: uint8 = 10;
    tempArray: TSArray<int64> = [];

    constructor(player: uint64) {
        super();
        this.player = player;
    }
}

@CharactersTable
class CharactersTest extends DBTable {
    @PrimaryKey
    id: uint32 = 0;

    constructor(id: uint32) {
        super();
        this.id = id;
    }
}

@AuthTable
class AuthTest extends DBTable {
    @PrimaryKey
    id: int8 = 0;

    constructor(id: uint32) {
        super();
        this.id = id;
    }
}

export function DatabaseTests(events: TSEventHandlers) {
    const item = QueryWorld('SELECT name from item_template where entry=25;');
    console.log(item.IsValid());
    while(item.GetRow()) {
        console.log(item.GetString(0));
    }

    const usernames = QueryAuth('SELECT * from account;');
    while(usernames.GetRow()) {
        console.log(usernames.GetString(1));
    }

    const characters = QueryCharacters('SELECT name from characters;')
    while(characters.GetRow()) {
        console.log(characters.GetString(0));
    }

    let player = new PlayerTest(1007688);
    player.name = 'Testname';

    player.tempValue = 100;
    player.tempArray.push(25);

    player.save();

    let loaded = LoadRow(PlayerTest,'player = 1007688');
    console.log("[Database] This is Testname:",loaded.get(0).name)
    loaded.get(0).name = "New Name";
    loaded.get(0).save();

    let chr = new CharactersTest(1);
    chr.save();

    const chrload = LoadRow(CharactersTest,'id=1');
    console.log("[Database] This is 1: ",chrload.length);

    const chrload2 = LoadRow(CharactersTest,'id=2');
    console.log("[Database] This is 0: ",chrload2.length);

    let auth = new AuthTest(10);
    auth.save();
}