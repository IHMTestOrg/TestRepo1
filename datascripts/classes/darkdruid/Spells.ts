import { std } from "tswow-stdlib";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";
import { DARK_MAGIC, METAMORPHOSIS } from "./DarkDruid";

export const WRATH = std.Spells.create(TSWOW_TESTMODULE,'wrath',5176)
    .SkillLines.add(DARK_MAGIC.ID).setAutolearn().end

export const INSECT_SWARM = std.Spells.create(TSWOW_TESTMODULE,'insect-swarm',5570)
    .SkillLines.add(DARK_MAGIC.ID).setAutolearn().end

export const ACIDIC_BITE = std.Spells.create(TSWOW_TESTMODULE,'acidic-bite',64638)
    .SkillLines.add(METAMORPHOSIS.ID).setAutolearn().end
    .Attributes.notShapeshifted.clear()
    .Attributes.meleeCombatStart.mark()

export const SCARAB = std.CreatureTemplates.create(TSWOW_TESTMODULE,'scarab',28017)
    .Models.addIds(13096);

const SPAWN_SCARAB_PROC = std.Spells.create(TSWOW_TESTMODULE,'spawn-scarab-proc',50452)
    .Effects.get(0).MiscValueA.set(SCARAB.ID).end

export const SPAWN_SCARAB = std.Spells.create(TSWOW_TESTMODULE,'spawn_scarab',49543)
    .SkillLines.add(METAMORPHOSIS.ID).setAutolearn().end
    // High procrate so you can see it works
    .Proc.Chance.set(90)
    .Effects.get(0).TriggerSpell.set(SPAWN_SCARAB_PROC.ID)