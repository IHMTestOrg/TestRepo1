import { std } from "tswow-stdlib";
import { NECROMANCER_CLASS } from "./Necromancer";
import { SUMMON_ABOMINATION } from "./SummonAbomination";

export const NECROMANCY = std.TalentTrees.create('tswow-necromancer','tswow',0,[NECROMANCER_CLASS.ID])
NECROMANCY.Name.enGB.set(`Necromancy`);

const IMPROVED_FIREBALL = std.Spells.load(11069)

export const IMP_ABOMINATION = 
    std.Spells.create('tswow-necromancer','imp-abomination-spell',11069)
IMP_ABOMINATION.Name.enGB.set(`Improved Summon Abomination`);

// Notice how we match a specific effect in the improved fireball spell
SUMMON_ABOMINATION.ClassMask.match(IMPROVED_FIREBALL.Effects.get(0))

// Change the casttime reduction to  seconds (9000ms)
IMP_ABOMINATION.Effects.get(0).BasePoints.set(-9000)

export const IMP_ABOMINATION_TALENT = NECROMANCY.addTalent('tswow-necromancer','imp-abomination-talent',0,1,[IMP_ABOMINATION.ID])