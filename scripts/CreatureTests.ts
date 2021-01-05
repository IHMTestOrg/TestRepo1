export function CreatureTests(events: TSEventHandlers) {
    events.CreatureID.OnJustEnteredCombat(3100,(creature,target)=>{
        console.log("A boar entered combat!");
    });

    events.Creatures.OnCharmed((c,isnew)=>{
        console.log("A creature was charmed");
    });

    events.Creatures.OnCorpseRemoved((c,d)=>{
        console.log("A creature corpse was removed");
    });

    events.Creatures.OnDeath((c,killer)=>{
        console.log("A creature died");
    });

    events.Creatures.OnHitBySpell((c,caster,s)=>{
        console.log("A creature was hit by a spell");
    });

    events.Creatures.OnIsSummoned((creature,summoner)=>{
        console.log("A creature was summoned");
    });

    events.Creatures.OnJustAppeared((creature)=>{
        console.log("A creature just appeared");
    });

    events.Creatures.OnJustEnteredCombat((creature,target)=>{
        console.log("A creature just entered combat");
    });

    events.Creatures.OnKilledUnit((creature,killed)=>{
        console.log("A unit was just killed");
    });

    events.Creatures.OnMoveInLOS((creature,seen)=>{
        //console.log("A creature just saw something...");
    });

    events.Creatures.OnOwnerAttacked((c,a)=>{
        console.log("A summons owner was just attacked");
    });

    events.Creatures.OnOwnerAttacks((c,t)=>{
        console.log("A summons owner just attacked something");
    });

    events.Creatures.OnPassengerBoarded((c,p,s,i)=>{
        console.log("Something boarded this creature");
    });

    events.Creatures.OnReachedHome((c)=>{
        console.log("A creature just reached its home");
    });

    events.Creatures.OnReceiveEmote((c,p,e)=>{
        console.log("A creature received an emote");
    });

    events.Creatures.OnSpellCastFinished((c,s,r)=>{
        console.log("A creature finished a spell cast");
    });

    events.Creatures.OnSpellClick((creature,clicker,isfirst)=>{
        console.log("A creature received a spell click");
    });

    events.Creatures.OnSpellHitTarget((c,t,s)=>{
        console.log("A creatures spell hit a target");
    });

    events.Creatures.OnSummonDespawn((c,s)=>{
        console.log("A summon was just despawned");
    });

    events.Creatures.OnSummonDies((c,s,k)=>{
        console.log("A summon just died");
    });

    events.Creatures.OnSummoned((c,s)=>{
        console.log("A creature was just summoned");
    });

    events.Creatures.OnUpdateAI((c,d)=>{
        // Do not log this
    });

    events.Creatures.OnWaypointPathEnded((c,id,p)=>{
        console.log("Waypoint ended");
    });

    events.Creatures.OnWaypointReached((c,i,p)=>{
        console.log("Waypoint reached");
    });

    events.Creatures.OnWaypointStarted((c,i,p)=>{
        console.log("Waypoint started");
    });
}