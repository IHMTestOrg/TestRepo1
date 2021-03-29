import { std } from "tswow-stdlib";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";
import { DEATH_SKILL } from "./Necromancer";

std.Spells.create(TSWOW_TESTMODULE,'deathanddecay',72110)
    .SkillLines.add(DEATH_SKILL.ID).setAutolearn()