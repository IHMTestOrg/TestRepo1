export function PlayerTests(events: TSEventHandlers) {
    events.Player.OnSay((player,evtype,lang,msg)=>{
        player.SendBroadcastMessage('You just typed a message');
    });

    events.Player.OnBindToInstance((player,diff,mapid,permanent,estate)=>{
        player.SendBroadcastMessage('You were just bound to an instance');
    });

    events.Player.OnChatGuild((player,type,lang,msg,guild)=>{
        console.log("Guild message!");
    });

    events.Player.OnChatGroup((player,type,lang,msg,group)=>{
        console.log("Party message!");
    });

    events.Player.OnCreate((player)=>{
        console.log("A player was created");
    });

    events.Player.OnCreatureKill((killer,killed)=>{
        killer.SendBroadcastMessage("You just killed a creature");
    });

    events.Player.OnDelete((guid,accid)=>{
        console.log("A player was deleted");
    });

    events.Player.OnDuelEnd((winner,loser,type)=>{
        winner.SendBroadcastMessage("You just won a duel");
        loser.SendBroadcastMessage("You just lost a duel");
    });

    events.Player.OnDuelRequest((target,challenger)=>{
        challenger.SendBroadcastMessage("You just requested a duel");
        target.SendBroadcastMessage("You just received a duel request");
    });

    events.Player.OnDuelStart((p1,p2)=>{
        p1.SendBroadcastMessage("A duel just started (you're p1)")
        p2.SendBroadcastMessage("A duel just started (you're p2)")
    });

    events.Player.OnEmote((player,emote)=>{
        player.SendBroadcastMessage("You just did an emote");
    });

    events.Player.OnFailedDelete((guid,accid)=>{
        console.log("A player failed to delete their account");
    });

    events.Player.OnFreeTalentPointsChanged((player,points)=>{
        player.SendBroadcastMessage("You just changed free talent points");
    });

    events.Player.OnGiveXP((player,amt,victim)=>{
        player.SendBroadcastMessage("You just received xp");
    });

    /*
    events.Player.OnGuildChat((player,type,msg,guild)=>{
        player.SendBroadcastMessage("You just wrote in a guild chat");
    });
    */

    events.Player.OnLevelChanged((player,oldlevel)=>{
        player.SendBroadcastMessage("You level just changed");
    });

    events.Player.OnLogin((player,first)=>{
        if(first) {
            player.SendBroadcastMessage("Welcome to TSWoW!");
        } else {
            player.SendBroadcastMessage("Welcome back to TSWoW!");
        }
    });

    events.Player.OnLogout((player)=>{
        console.log("A player has logged out");
    });

    events.Player.OnMapChanged((player)=>{
        player.SendBroadcastMessage("Your map just changed");
    });

    events.Player.OnMoneyChanged((player,amt)=>{
        player.SendBroadcastMessage("Your money just changed");
    });

    events.Player.OnMoneyLimit((player,amt)=>{
        player.SendBroadcastMessage("You just hit money limit(?");
    });

    events.Player.OnMovieComplete((player,movieid)=>{
        player.SendBroadcastMessage("You just completed a movie");
    });

    events.Player.OnPVPKill((killer,killed)=>{
        killer.SendBroadcastMessage("You just killed someone in pvp");
        killed.SendBroadcastMessage("You were just killed in pvp");
    });

    /*
    events.Player.OnPartyChat((player,type,lang,msg)=>{
        player.SendBroadcastMessage("You just sent a party chat message");
    });
    */

    events.Player.OnPlayerKilledByCreature((killer,killed)=>{
        killed.SendBroadcastMessage("You were just killed by a creature");
    });

    events.Player.OnPlayerRepop((player)=>{
        player.SendBroadcastMessage("You just... what(??)");
    });

    events.Player.OnQuestObjectiveProgress((player,quest,index,progress)=>{
        player.SendBroadcastMessage("You just updated a quest objective");
    });

    events.Player.OnQuestStatusChange((player,id)=>{
        player.SendBroadcastMessage("Your quest status just changed");
    });

    events.Player.OnReputationChange((player,faction,standing,incremental)=>{
        player.SendBroadcastMessage("Your reputation just changed");
    });

    events.Player.OnSave((player)=>{
        player.SendBroadcastMessage("You're being saved");
    });

    events.Player.OnSpellCast((player,spell,skip)=>{
        player.SendBroadcastMessage("You just cast a spell");
    });

    events.Player.OnTalentsReset((player,nocost)=>{
        player.SendBroadcastMessage("Your talents were just reset");
    });

    events.Player.OnTextEmote((player,te,num,guid)=>{
        player.SendBroadcastMessage("You just did a text emote");
    });

    events.Player.OnUpdateZone((player,nz,narea)=>{
        player.SendBroadcastMessage("You just updated to a new area");
    });

    events.Player.OnWhisper((player,type,lang,msg,receiver)=>{
        player.SendBroadcastMessage("You just sent a whisper");
        receiver.SendBroadcastMessage("You just received a whisper");
    });
}