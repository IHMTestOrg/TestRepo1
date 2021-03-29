// Not THOSE types of unit tests...
export function UnitTests(events: TSEventHandlers) {
    events.Unit.OnDamage((attacker,victim,damage)=>{
        if(attacker.IsPlayer()) {
            attacker.ToPlayer().SendBroadcastMessage("You damaged something");
        }

        if(victim.IsPlayer()) {
            victim.ToPlayer().SendBroadcastMessage("You were damaged by something");
        }
    });

    events.Unit.OnHeal((healer,receiver,gain)=>{
        if(healer.IsPlayer()) {
            healer.ToPlayer().SendBroadcastMessage("You healed something");
        }

        if(receiver.IsPlayer()) {
            receiver.ToPlayer().SendBroadcastMessage("You were healed by something");
        }
    });

    events.Unit.ModifyMeleeDamage((target,attacker,damage)=>{
        if(target.IsPlayer()) {
            target.ToPlayer().SendBroadcastMessage("You were damaged by modified melee damage");
        }

        if(attacker.IsPlayer()) {
            attacker.ToPlayer().SendBroadcastMessage("You deal modified melee melee damage");
        }
    });

    events.Unit.ModifyPeriodicDamageAurasTick((target,attacker,damage)=>{
        if(target.IsPlayer()) {
            target.ToPlayer().SendBroadcastMessage("You were damaged by modified periodic damage");
        }

        if(attacker.IsPlayer()) {
            attacker.ToPlayer().SendBroadcastMessage("You deal modified periodic damage");
        } 
    });

    events.Unit.ModifySpellDamageTaken((target,attacker,damage)=>{
        if(target.IsPlayer()) {
            target.ToPlayer().SendBroadcastMessage("You were damaged by modified spell damage");
        }

        if(attacker.IsPlayer()) {
            attacker.ToPlayer().SendBroadcastMessage("You deal modified spell damage");
        } 
    });

    /*
    events.Unit.ModifyVehiclePassengerExitPos((pass,vehicle,pos)=>{
        if(pass.IsPlayer()) {
            pass.ToPlayer().SendBroadcastMessage("You get a modified vehicle exit pos");
        }
    });
    */
}