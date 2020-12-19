import { std } from "tswow-stdlib";
import { SUMMON_ABOMINATION } from "./SummonAbomination";
import { NECROMANCER_CLASS } from "./Necromancer";
import { BONE_SHIELD } from "./BoneShield";
import { Pos } from "tswow-stdlib/Misc/Position";

export const NECRO_TRAINER = 
    std.CreatureTemplates.create('tswow-necromancer','necromancer-trainer',375)
NECRO_TRAINER.Name.enGB.set('Wilson Carter');
NECRO_TRAINER.Title.enGB.set('Necromancy Trainer')

// The text displayed at the top of the trainer window
NECRO_TRAINER.Trainer.Greeting.enGB.set(`Necromancy is like baseball, I know nothing of either.`)

// Set the trainer class to necromancer
NECRO_TRAINER.Trainer.Class.set(NECROMANCER_CLASS.ID);

// Because of how Trainers work, trainer data is not copied over from the last creature
NECRO_TRAINER.Trainer.addSpell(SUMMON_ABOMINATION.ID,10,5);
NECRO_TRAINER.Trainer.addSpell(BONE_SHIELD.ID,10,10);

NECRO_TRAINER
    .spawn('tswow-necromancer','trainer-instance',Pos(0,-8898.656250,-130.632767,81.285889,1.766019))