function onTick(effect: TSAuraEffect) {
    if(!effect.GetCaster().IsPlayer()) {
        return;
    }
    effect.GetCaster().ToPlayer().SendBroadcastMessage("Spell tick");
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
    events.SpellID.OnTick(133,(effect)=>{ onTick(effect); });
    events.SpellID.OnHit(133, (spell)=>{ onHit(spell); });
    events.SpellID.OnCast(133, (spell)=>{ onCast(spell); }); 

    events.SpellID.OnTick(172,(effect)=>{ onTick(effect); });
    events.SpellID.OnHit(172, (spell)=>{ onHit(spell); });
    events.SpellID.OnCast(172, (spell)=>{ onCast(spell); }); 

    events.Spells.OnTick((effect)=>{onTick(effect);});
    events.Spells.OnHit((spell)=>{onHit(spell);});
    events.Spells.OnCast((spell)=>{onCast(spell);});
}