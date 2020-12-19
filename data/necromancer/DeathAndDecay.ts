import { std } from "tswow-stdlib";
import { DEATH_SKILL } from "./Necromancer";

std.Spells.create('tswow-necromancer','deathanddecay',72110)
    .SkillLines.add(DEATH_SKILL.ID).setAutolearn()