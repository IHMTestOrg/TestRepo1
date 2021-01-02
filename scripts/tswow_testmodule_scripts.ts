import { AccountTests } from "./AccountTests";
import { BasicTests } from "./BasicTests";
import { FormulaTests } from "./FormulaTests";
import { GroupTests } from "./GroupTests";
import { GuildTests } from "./GuildTests";
import { ID } from "./ID";
import { PlayerTests } from "./PlayerTests";
import { SpellTests } from "./SpellTests";
import { UnitTests } from "./UnitTests";
import { WorldTests } from "./WorldTests";

export function Main(events: TSEventHandlers) {
    //Register your events here!
    events.Spells.OnCast(ID.TSWOW_TESTMODULE_DISGUISE, (spell)=>{
        // No null check
        if(spell.GetCaster().IsNull()) {
            return;
        }

        if(!spell.GetCaster().IsPlayer()) {
            return;
        }

        if(spell.GetCaster().ToPlayer().GetSelection().IsNull()) {
            return;
        }

        spell.GetCaster().ToUnit().SetDisplayId(spell.GetCaster().ToPlayer().GetSelection().ToUnit().GetDisplayId());
    });

    events.Spells.OnCast(ID.TSWOW_TESTMODULE_SPECIALBLINK, (spell)=>{
        const dest : TSPosition = spell.GetTargetDest();
        spell.GetCaster().ToUnit().NearTeleport(dest.x,dest.y,dest.z,spell.GetCaster().ToUnit().GetO());
    });

    events.Spells.OnCast(ID.TSWOW_TESTMODULE_FLAME_STRIKE, (spell)=>{
        if(!spell.GetCaster().IsUnit()) {
            return;
        }
        const caster = spell.GetCaster().ToUnit();
        const pos : TSPosition = spell.GetTargetDest();
        caster.CastSpellAoF(pos.x,pos.y,pos.z,60160,true);
        caster.CastSpellAoF(pos.x-5,pos.y,pos.z,ID.TSWOW_TESTMODULE_FLAME_STRIKE_SMALL,true);
        caster.CastSpellAoF(pos.x,pos.y-5,pos.z,ID.TSWOW_TESTMODULE_FLAME_STRIKE_SMALL,true);
        caster.CastSpellAoF(pos.x+5,pos.y,pos.z,ID.TSWOW_TESTMODULE_FLAME_STRIKE_SMALL,true);
        caster.CastSpellAoF(pos.x,pos.y+5,pos.z,ID.TSWOW_TESTMODULE_FLAME_STRIKE_SMALL,true);
    });

    SpellTests(events);
    PlayerTests(events);
    UnitTests(events);
    AccountTests(events);
    WorldTests(events);
    GuildTests(events);
    GroupTests(events);
    FormulaTests(events);
    BasicTests(events);
}