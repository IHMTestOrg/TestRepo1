class Teste {
    io: uint32 = 250;
}

export function MoreClassTests(events: TSEventHandlers) {
    events.Player.OnSay((player,type,lang,msg)=>{
        console.log(player.GetData().GetObject<Teste>(ModID(),"key",()=>new Teste()).io++);

        player.GetTasks().AddTimer(ModID(),"lole",1000,1,(timer,type,del,can)=>{
            type.ToPlayer().SendBroadcastMessage("Delayed message");
        });

        player.GetCollisions().Add(ModID(),"key",10,1000,0,(e,s,c,can)=>{
            s.ToPlayer().SendBroadcastMessage("Colliding with "+c.GetName());
        });
    });
}