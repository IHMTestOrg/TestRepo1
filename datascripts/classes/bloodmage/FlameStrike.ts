import { std } from "tswow-stdlib";
import { Ids } from "tswow-stdlib/Base/Ids";
import { DBC } from "wotlkdata/dbc/DBCFiles";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";
import { BLOOD_MAGIC_SKILL } from "./BloodMage";

const SMALL_STRIKE_SCALE = DBC.SpellVisualEffectName
    .findById(420)
    .clone(Ids.SpellVisualEffectName.id())
    .Scale.set(0.6)

export const FLAME_STRIKE_SMALL = std.Spells
    .create(TSWOW_TESTMODULE,'flame-strike-small',42926)
    .CastTime.set(0,0,0)
    .PersistentAreaKit.BaseEffect.setID(SMALL_STRIKE_SCALE.ID.get())

export const FLAME_STRIKE = std.Spells
    .create(TSWOW_TESTMODULE,'flame-strike',42926)
    .Name.set({enGB: 'FlameStrike'})
    .CastTime.set(0,0,0)
    .SkillLines.add(BLOOD_MAGIC_SKILL.ID).setAutolearn()