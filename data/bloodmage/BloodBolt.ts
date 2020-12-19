import { std } from "tswow-stdlib";
import { BLOOD_MAGIC_SKILL } from "./BloodMage";

export const BLOOD_BOLT = std.Spells
    .create('tswow-necromancer','blood-bolt',133)
    .Visual.MissileModel.set(2972)
    .Icon.set('Interface\\Icons\\Spell_Shadow_BloodBoil.blp')
    .Name.set({enGB:'Blood Bolt'})
    .CastTime.set(0,0,0)
    .SkillLines.add(BLOOD_MAGIC_SKILL.ID).setAutolearn()