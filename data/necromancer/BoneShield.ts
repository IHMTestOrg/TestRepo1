import { std } from "tswow-stdlib";
import { DEATH_SKILL } from "./Necromancer";

export const BONE_SHIELD = 
    std.Spells.create('tswow-necromancer','boneshield',49222)

BONE_SHIELD.Power.setMana(1337);
BONE_SHIELD.SkillLines.add(DEATH_SKILL.ID)
BONE_SHIELD.Icon.set('Interface\\Icons\\INV_Misc_Bone_01.blp');