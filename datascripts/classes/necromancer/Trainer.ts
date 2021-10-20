import { std } from "tswow-stdlib";
import { SUMMON_ABOMINATION } from "./SummonAbomination";
import { NECROMANCER_CLASS, NECROMANCY_SKILL } from "./Necromancer";
import { BONE_SHIELD } from "./BoneShield";
import { Pos } from "tswow-stdlib/Misc/Position";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";

export const NECRO_TRAINER_HUMAN = 
    std.CreatureTemplates.create(TSWOW_TESTMODULE,'necromancer-trainer-human',375)
    .Name.enGB.set('Wilson Carter')
    .Subname.enGB.set('Necromancy Trainer')
    .Trainer.Greeting.enGB.set(`Necromancy is like baseball, I know nothing of either.`)
    .Class.set(NECROMANCER_CLASS.ID)
        .addSpell(SUMMON_ABOMINATION.ID,10,5,NECROMANCY_SKILL.ID,0,[])
        .addSpell(BONE_SHIELD.ID,10,10)
    .end
    .spawn(TSWOW_TESTMODULE,'trainer-instance-ally',Pos(0,-8898.656250,-130.632767,81.285889,1.766019))

export const NECRO_TRAINER_ORC = 
    std.CreatureTemplates.create(TSWOW_TESTMODULE,'necromancer-trainer-orc',3156)
    .Name.enGB.set('Orc Name')
    .Subname.enGB.set('Necromancy Trainer')
    .Trainer.Greeting.enGB.set(`Zug zug dabou loktar ogar.`)
    .Class.set(NECROMANCER_CLASS.ID)
    .Class.set(NECROMANCER_CLASS.ID)
        .addSpell(SUMMON_ABOMINATION.ID,10,5)
    .end
    .spawn(TSWOW_TESTMODULE,'trainer-instance-orc',Pos(1,-613.802246,-4201.474609,38.319256,4.699590))