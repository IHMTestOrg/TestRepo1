function onTick(caster: TSUnit, target: TSUnit) {
    if(caster.IsNull()) {
        return;
    }

    if(!caster.IsPlayer()) {
        return;
    }

    caster.ToPlayer().SendBroadcastMessage("Spell tick");
}

function onHit(spell: TSSpell) {
    if(spell.GetCaster().IsNull()) {
        return;
    }

    if(!spell.GetCaster().IsPlayer()) {
        return;
    }

    spell.GetCaster().ToPlayer().SendBroadcastMessage("Spell hit");
}

function onCast(spell: TSSpell) {
    if(spell.GetCaster().IsNull()) {
        return;
    }

    if(!spell.GetCaster().IsPlayer()) {
        return;
    }

    spell.GetCaster().ToPlayer().SendBroadcastMessage("Spell cast");
}

export function SpellTests(events: TSEventHandlers) {
    events.Spells.OnTick(133,(caster,target)=>{ onTick(caster,target); });
    events.Spells.OnHit(133, (spell)=>{ onHit(spell); });
    events.Spells.OnCast(133, (spell)=>{ onCast(spell); }); 

    events.Spells.OnTick(172,(caster,target)=>{ onTick(caster,target); });
    events.Spells.OnHit(172, (spell)=>{ onHit(spell); });
    events.Spells.OnCast(172, (spell)=>{ onCast(spell); }); 
}