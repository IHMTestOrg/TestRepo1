import { std } from "tswow-stdlib";
import { Pos } from "tswow-stdlib/Misc/Position";

const HORSEY = std.CreatureTemplates
    .create('tswow-necromancer','horse',5403)
    .NPCFlags.QuestGiver.mark()
    .Name.set({enGB:'Horsey'})

export const HELP_A_HORSE = std.Quests
    .create('tswow-necromancer','help-a-horse')
        .MinLevel.set(1)
        .SortID.set(12)
        .Objectives.Scripted.set({enGB:'Help horse across the bridge'})
        .Questgiver.addBoth(HORSEY.ID)

HORSEY.Waypoints.add(Pos(0,-9025.255859,-277.478546,73.000908,5.380001))
HORSEY.Waypoints.add(Pos(0,-8998.208008,-309.925690,72.084114,0.761858))
HORSEY.Waypoints.add(Pos(0,-8986.447266,-299.078491,72.089447,0.740206))
HORSEY.Waypoints.add(Pos(0,-8974.703125,-287.146545,71.942207,0.769712))
HORSEY.Scripts.onAcceptedQuest(HELP_A_HORSE.ID)
        .Target.setInvokerParty()
        .Action.setStoreTargetList(0)
    .then
        .Target.setActionInvoker()
        .Action.setStoreTargetList(1)
    .then
        .Target.setSelf()
        .Action.setWpStart(0,HORSEY.ID,false,0,10,0)

HORSEY.Scripts.onWaypointReached(4,HORSEY.ID)
    .Action.setFinishQuestScript(HELP_A_HORSE.ID)
    .Target.setStored(0)
    .then
    .Action.setFinishQuestScript(HELP_A_HORSE.ID)
    .Target.setStored(1)

HORSEY.Scripts.onWaypointReached(3,HORSEY.ID)
    .Action.setTalk({enGB: 'Uh oh, here they come'}, 1000)
    
HORSEY.spawn('a','qqq',Pos(0,-9057.302734,-262.682159,74.508736,5.965123));