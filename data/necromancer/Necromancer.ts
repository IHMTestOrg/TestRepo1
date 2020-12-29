import { std } from 'tswow-stdlib';

export const NECROMANCER_CLASS = 
    std.Classes.create('mymod','necromancer','NECROMANCER','MAGE');

export const NECROMANCER_ROBE =
    std.Items.create('tswow-necromancer','cls',56).Visual.row.Texture.set

NECROMANCER_CLASS.addRaces(['HUMAN','ORC','BLOODELF','UNDEAD']);
NECROMANCER_CLASS.Name.enGB.set('Necromancer');

NECROMANCER_CLASS.EquipSkills.Staves.setAuto();
NECROMANCER_CLASS.EquipSkills.Cloth.setAuto();
NECROMANCER_CLASS.EquipSkills.Polearms.setAuto();
NECROMANCER_CLASS.StartGear.Mainhand.set(41821)
NECROMANCER_CLASS.StartGear.Ranged.set(39134)
NECROMANCER_CLASS.StartGear.Chest.set(42844)

NECROMANCER_CLASS.UI.TCoords.set(0.5,0.75,0.5,0.75);
NECROMANCER_CLASS.UI.ClassButton.setPos(85,-420)

// Change the stats
NECROMANCER_CLASS.UI.Color.set(0xcc0077)
NECROMANCER_CLASS.UI.Info.add('- Role: Damage, Tank')
NECROMANCER_CLASS.UI.Info.add('- Light Armor (Cloth)')
NECROMANCER_CLASS.UI.Info.add('- Controls multiple undead servants')
NECROMANCER_CLASS.UI.Info.add('- Uses mana as a resource')
NECROMANCER_CLASS.UI.Description
    .set("Necromancers raise and control the undead, and brings plague and destruction on their enemies. Necromancy is strictly forbidden in both Horde and Alliance societies, and those who practice it can only do so in absolute secrecy.")

// Give all totems
NECROMANCER_CLASS.Inventory.add(5175, 1);
NECROMANCER_CLASS.Inventory.add(5176, 1);
NECROMANCER_CLASS.Inventory.add(5177, 1);
NECROMANCER_CLASS.Inventory.add(5178, 1);

// Attack power = 1337*intellect
NECROMANCER_CLASS.Stats.MeleeAttackPower.set('1337*int')
// Spell Crit = 0.1*level
NECROMANCER_CLASS.Stats.SpellCrit.set((x,level)=>0.1*level)
// Melee crit = 0.1*level
NECROMANCER_CLASS.Stats.MeleeCrit.set((x,level)=>0.1*level)

export const NECROMANCY_SKILL = std.SkillLines
    .createClass('tswow-necromancer','necromancy-skill',NECROMANCER_CLASS.ID)
NECROMANCY_SKILL.Name.enGB.set(`Necromancy`)
NECROMANCY_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_ShadeTrueSight.blp')

// Truly the epitome of creativity
export const DEATH_SKILL = std.SkillLines
    .createClass('tswow-necromancer','death-skill',NECROMANCER_CLASS.ID)
DEATH_SKILL.Name.enGB.set(`Death`)
DEATH_SKILL.Icon.set('Interface\\Icons\\Spell_Shadow_DeathCoil')