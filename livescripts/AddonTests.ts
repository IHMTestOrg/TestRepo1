import { MessageClass } from "../shared/MessageClass";

export function AddonTests(events: TSEventHandlers) {
    events.Player.OnSay((player,type,lang,msg)=>{
        player.SendData(new MessageClass());
    });

    events.Addon.OnMessageID(MessageClass,(player,msg)=>{
        player.SendBroadcastMessage("Server Receive message class:"+msg.u32);
        msg.u32++;
        if(msg.u32<20) {
            player.SendData(msg);
        }
    });
}