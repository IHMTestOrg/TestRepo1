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
    events.SpellID.OnTick(133,(caster,target)=>{ onTick(caster,target); });
    events.SpellID.OnHit(133, (spell)=>{ onHit(spell); });
    events.SpellID.OnCast(133, (spell)=>{ onCast(spell); }); 

    events.SpellID.OnTick(172,(caster,target)=>{ onTick(caster,target); });
    events.SpellID.OnHit(172, (spell)=>{ onHit(spell); });
    events.SpellID.OnCast(172, (spell)=>{ onCast(spell); }); 

    events.Spells.OnTick((caster,target)=>{onTick(caster,target);});
    events.Spells.OnHit((spell)=>{onHit(spell);});
    events.Spells.OnCast((spell)=>{onCast(spell);});
}