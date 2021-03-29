import { std } from "tswow-stdlib";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";
import { NECROMANCER_CLASS } from "./Necromancer";
import { SUMMON_ABOMINATION } from "./SummonAbomination";

export const NECROMANCY = std.TalentTrees.create(TSWOW_TESTMODULE,'tswow',0,[NECROMANCER_CLASS.ID])
NECROMANCY.Name.enGB.set(`Necromancy`);

/**
 * Silly Talent
 */
const FIREBALL_1 = std.Spells.create(TSWOW_TESTMODULE,'fireball-spell-1',133)
const FIREBALL_2 = std.Spells.create(TSWOW_TESTMODULE,'fireball-spell-2',133)
const FIREBALL_TALENT = NECROMANCY.addTalent('tswow-introduction','silly-talent',0,0,[FIREBALL_1.ID,FIREBALL_2.ID])

const IMPROVED_FIREBALL = std.Spells.load(11069)
export const IMP_ABOMINATION = 
    std.Spells.create(TSWOW_TESTMODULE,'imp-abomination-spell',11069)
IMP_ABOMINATION.Name.enGB.set(`Improved Summon Abomination`);

// Notice how we match a specific effect in the improved fireball spell
SUMMON_ABOMINATION.ClassMask.match(IMPROVED_FIREBALL.Effects.get(0))

// Change the casttime reduction to  seconds (9000ms)
IMP_ABOMINATION.Effects.get(0).BasePoints.set(-9000)
IMP_ABOMINATION.Icon.set('Interface\\Icons\\Achievement_Boss_patchwerk.blp')

export const IMP_ABOMINATION_TALENT = NECROMANCY.addTalent(TSWOW_TESTMODULE,'imp-abomination-talent',0,1,[IMP_ABOMINATION.ID])
IMP_ABOMINATION_TALENT.Requirements.add(FIREBALL_TALENT.ID,2);