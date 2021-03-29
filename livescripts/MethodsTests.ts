export function MethodsTests(events: TSEventHandlers) {
    // Test Range/Nearest
    events.Player.OnSay((player,type,lang,msg)=>{
        let units = player.GetUnitsInRange(200,0,0);
        for(let i=0;i<units.length;++i) {
            player.SendBroadcastMessage("You're close to:"+units.get(i).GetName());
        }

        let creatures = player.GetCreaturesInRange(20,0,0,0);
        for(let i=0; i<creatures.length;++i) {
            player.SendBroadcastMessage("You're close to creature:"+creatures.get(i).GetName());
        }
        
        let players = player.GetPlayersInRange(20,0,0);
        for(let i=0; i<players.length;++i) {
            player.SendBroadcastMessage("You're close to player:"+players.get(i).GetName());
        }

        let gobjects = player.GetGameObjectsInRange(20,0,0);
        for(let i=0;i<gobjects.length;++i){
            player.SendBroadcastMessage("You're close to gobject:"+gobjects.get(i).GetName());
        }

        const boar = player.GetNearestCreature(100,3100,0,0);
        if(!boar.IsNull()) {
            player.SendBroadcastMessage("You have a boar close to you");
        }

        player.GetNearestGameObject(10,0,0);
        player.GetNearestPlayer(100,0,0);
        player.GetPlayersInRange(200,0,0);
        player.GetCreaturesInRange(100,0,0,0);
        player.GetGameObjectsInRange(100,0,0);
    });
}