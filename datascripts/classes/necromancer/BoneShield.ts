import { std } from "tswow-stdlib";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";
import { DEATH_SKILL } from "./Necromancer";

export const BONE_SHIELD = 
    std.Spells.create(TSWOW_TESTMODULE,'boneshield',49222)
    .Power.setMana(1337)
    .SkillLines.add(DEATH_SKILL.ID).end
    .Icon.set('Interface\\Icons\\INV_Misc_Bone_01.blp')