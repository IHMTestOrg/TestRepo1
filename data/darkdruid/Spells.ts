import { std } from "tswow-stdlib";
import { DARK_MAGIC, METAMORPHOSIS } from "./DarkDruid";

/**
 * Just the normal wrath
 */
export const WRATH = std.Spells.create('tswow-necromancer','wrath',5176)
    .SkillLines.add(DARK_MAGIC.ID).setAutolearn().up()

/**
 * Just the normal insect swarm
 */
export const INSECT_SWARM = std.Spells.create('tswow-necromancer','insect-swarm',5570)
    .SkillLines.add(DARK_MAGIC.ID).setAutolearn().up()

/**
 * Poison-looking spell (TODO: Can be cast without shapeshift)
 */
export const ACIDIC_BITE = std.Spells.create('tswow-necromancer','acidic-bite',64638)
    .SkillLines.add(METAMORPHOSIS.ID).setAutolearn().up()
    .Attributes.notShapeshifted.clear()
    .Attributes.meleeCombatStart.mark()

/**
 * Bloodworms-like spells with scarabs instead
 */

export const SCARAB = std.CreatureTemplates.create('tswow-necromancer','scarab',28017)
    .Models.set([13096]);

const SPAWN_SCARAB_PROC = std.Spells.create('tswow-necromancer','spawn-scarab-proc',50452)
    .Effects.get(0).MiscValueA.set(SCARAB.ID).up()

export const SPAWN_SCARAB = std.Spells.create('tswow-necromancer','spawn_scarab',49543)
    .SkillLines.add(METAMORPHOSIS.ID).setAutolearn().up()
    // High procrate so you can see it works
    .Proc.Chance.set(90)
    .Effects.get(0).TriggerSpell.set(SPAWN_SCARAB_PROC.ID)