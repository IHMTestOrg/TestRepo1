import { MessageClass } from "../shared/MessageClass";
import { Events, SendToServer } from "./events";

const frame = CreateFrame('Frame','UniqueName');

Events.AddOns.OnMessage(frame,MessageClass,(msg)=>{
    console.log("Client received message class!");
    msg.u32++;

    if(msg.u32<20) {
        SendToServer(msg);
    }
});