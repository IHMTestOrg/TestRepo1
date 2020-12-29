import { ID } from "./ID";

export function Main(events: TSEventHandlers) {
    //Register your events here!
    events.Spells.OnCast(ID.TSWOW_NECROMANCER_DISGUISE, (spell)=>{
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

    events.Spells.OnCast(ID.TSWOW_NECROMANCER_SPECIALBLINK, (spell)=>{
        const dest : TSPosition = spell.GetTargetDest();
        spell.GetCaster().ToUnit().NearTeleport(dest.x,dest.y,dest.z,spell.GetCaster().ToUnit().GetO());
    });

    events.Player.OnSpellCast((player,spell,skipCheck)=>{
        if(spell.GetEntry()===ID.TSWOW_NECROMANCER_FLAME_STRIKE) {
            const pos : TSPosition = spell.GetTargetDest();
            player.CastSpellAoF(pos.x,pos.y,pos.z,60160,true);
            player.CastSpellAoF(pos.x-5,pos.y,pos.z,ID.TSWOW_NECROMANCER_FLAME_STRIKE_SMALL,true);
            player.CastSpellAoF(pos.x,pos.y-5,pos.z,ID.TSWOW_NECROMANCER_FLAME_STRIKE_SMALL,true);
            player.CastSpellAoF(pos.x+5,pos.y,pos.z,ID.TSWOW_NECROMANCER_FLAME_STRIKE_SMALL,true);
            player.CastSpellAoF(pos.x,pos.y+5,pos.z,ID.TSWOW_NECROMANCER_FLAME_STRIKE_SMALL,true);
        }
    });
}