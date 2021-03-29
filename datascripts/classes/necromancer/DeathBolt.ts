import { std } from 'tswow-stdlib';
import { TSWOW_TESTMODULE } from '../../tswow-testmodule';
import { DEATH_SKILL } from './Necromancer';

export const DEATH_BOLT =
    std.Spells.create(TSWOW_TESTMODULE,'death-bolt',686)
DEATH_BOLT.Name.enGB.set('Death Bolt')
DEATH_BOLT.Description.enGB.set('A bolt of Death!');

const DEATH_BOLT_ABILITY = DEATH_BOLT.SkillLines.add(DEATH_SKILL.ID)
DEATH_BOLT_ABILITY.setAutolearn();

const DEATH_COIL = std.Spells.load(47541)

// Copy the missile model
DEATH_BOLT.Visual.MissileModel.set(DEATH_COIL.Visual.MissileModel.get())

// Copy the impact visual kit
DEATH_BOLT.Visual.Kits.Impact.cloneFrom(DEATH_COIL.Visual.Kits.Impact)

DEATH_BOLT.Icon.set(DEATH_COIL.Icon.get());

const CORRUPTION = std.Spells.load(172)

// Copy the first effect in corruption to a new effect slot
DEATH_BOLT.Effects.add().copyFrom(CORRUPTION.Effects.get(0))

// Weird attribute that corruption had set
DEATH_BOLT.Attributes.unk82.mark();

// The duration of our DoT
DEATH_BOLT.Duration.set(12000,0,12000)

DEATH_BOLT.CastTime.set(0,0,0)

DEATH_BOLT.AuraDescription.enGB.set('Takes periodic damage');
