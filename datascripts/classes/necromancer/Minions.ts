import { std } from "tswow-stdlib";
import { TotemType } from "tswow-stdlib/Totem/TotemType";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";
import { NECROMANCY_SKILL } from "./Necromancer";

const totems : TotemType[] = ['EARTH','AIR','WATER','FIRE']

function makeSummon(index: number, name: string, displayName: string, modelId: number, icon: string, scale = 1) {
    const entity = std.CreatureTemplates.create(TSWOW_TESTMODULE,`${name}-${index}`,416);
    entity.Models.set([modelId]);
    entity.Name.enGB.set(`${displayName}`);
    const summon_spell = std.Spells.TotemCreatures
        .createSummon(TSWOW_TESTMODULE,`summon-${name}-${index}`, totems[index], entity.ID);
    entity.Scale.set(scale);

    summon_spell.SkillLines.add(NECROMANCY_SKILL.ID).setAutolearn();
    summon_spell.Name.enGB.set(`Summon ${displayName} ${totems[index]}`)
    summon_spell.Icon.set(icon);
    summon_spell.Cooldown.set(0,0,0,0)
}

for(let i=0;i<totems.length;++i){
    const controllers = std.Spells.TotemCreatures
        .createControllers(TSWOW_TESTMODULE,`control-${i}`,[i],['Attack'])
    controllers.Attack?.SkillLines.add(NECROMANCY_SKILL.ID).setAutolearn();
    controllers.Attack?.Name.enGB.set(`Attack ${i}`);

    makeSummon(i, 'skeleton', 'Skeleton',9790,'Interface\\Icons\\Spell_Shadow_RaiseDead.blp');
    makeSummon(i, 'ghoul', 'Ghoul', 416,'Interface\\Icons\\Ability_Creature_Disease_02.blp');
    makeSummon(i, 'warlord', 'Warlord', 775,'Interface\\Icons\\INV_Belt_13.blp',0.8);
    makeSummon(i, 'cryptguard', 'Crypt Guard', 14698,'Interface\\Icons\\Achievement_Dungeon_AzjolLowercity.blp',0.5)
}