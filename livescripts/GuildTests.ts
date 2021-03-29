export function GuildTests(events: TSEventHandlers) {
    events.Guild.OnAddMember((guild,player,rank)=>{
        console.log("Guild added player");
        player.SendBroadcastMessage("You joined a guild");
    });

    events.Guild.OnBankEvent((guild,type,tabid,player,itemormoney,stackCount,destTabId)=>{
        console.log("Guild bank event");
    });

    events.Guild.OnCreate((guild,leader,name)=>{
        leader.SendBroadcastMessage("You created a guild");
    });

    events.Guild.OnDisband((guild)=>{
        console.log("A guild was disbanded");
    });

    events.Guild.OnEvent((guid,type,p1,p2,nurank)=>{
        console.log("A guild event occurred");
    });

    events.Guild.OnInfoChanged((guild,newinfo)=>{
        console.log("Guild info was changed");
    });

    events.Guild.OnMOTDChanged((guild,newMotd)=>{
        console.log("Guild Motd was changed");
    });

    events.Guild.OnMemberDepositMoney((guild,player,amount)=>{
        console.log("Guild member deposited money");
    });

    events.Guild.OnMemberWitdrawMoney((guild,player,amount,isRepair)=>{
        console.log("Guild member withdrew money");
    });

    events.Guild.OnRemoveMember((guild,player,isDisbanding,isKicked)=>{
        console.log("Guild removing member");
    });
}