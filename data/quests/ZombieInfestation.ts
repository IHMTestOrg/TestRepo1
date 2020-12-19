import { std } from "tswow-stdlib";
import { NPCFlags } from "tswow-stdlib/Creature/NPCFlags";

export const SKULL = std.Items
    .create('tswow-necromancer','skull-heirloom',50432)
    .Name.set({enGB: 'Heirloom'})
    .Icon.set(`INV_Misc_Bone_HumanSkull_01`)

export const OLDBOOK = std.Items
    .create('tswow-necromancer','old-book',50432)
    .Name.set({enGB: 'Old Books'})
    .Icon.set(`INV_Misc_Book_01`);

export const ZOMBIE_INFESTATION = std.Quests
    .create('tswow-necromancer','zombie-infestation')
    .MinLevel.set(1)
    .SortID.set(12)
    .Objectives.Entity.add(1501,10)
    .Objectives.Item.add(SKULL.ID,1)
    .Objectives.Item.add(OLDBOOK.ID,1)
    .Questgiver.addBoth(6373)
    .Text.Title.set({enGB: 'Zombie Infestation'})
    .Text.Incomplete.set({enGB: 'Did you get my stuff yet?'})
    .Text.Description.set({enGB:'Slay 10 zombies and bring back my skull and books.'})
    .Text.Objective.set({enGB: 'There’s been a suspicious amount of zombies around here lately, perhaps you could help us clean them up? Oh, and one of them ran away with my family heirlooms: a large skull and some books. Would you be so kind to bring them back to me?'})

std.CreatureTemplates.load(6373).NPCFlags.QuestGiver.mark();

const ZOMBIE_LOOT = std.Loot.addCreature()
    .addItem(SKULL.ID,100,1,1,true)
    .addItem(OLDBOOK.ID,100,1,1,true)
    
std.CreatureTemplates.load(1501)
    .Loot.Normal.set(ZOMBIE_LOOT.ID)