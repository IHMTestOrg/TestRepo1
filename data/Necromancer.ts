import { std } from 'tswow-stdlib';

export const NECROMANCER_CLASS = 
    std.Classes.create('mymod','necromancer','NECROMANCER','MAGE');

NECROMANCER_CLASS.addRaces(['HUMAN','ORC','BLOODELF']);
NECROMANCER_CLASS.Name.enGB.set('Necromancer');

NECROMANCER_CLASS.EquipSkills.Staves.setAuto();
NECROMANCER_CLASS.UI.tcoords.set(0.5,0.75,0.5,0.75);

// Change the stats
NECROMANCER_CLASS.UI.color.set(0xcc0077)
NECROMANCER_CLASS.UI.info.add('- Role: Damage, Tank')
NECROMANCER_CLASS.UI.info.add('- Light Armor (Cloth)')
NECROMANCER_CLASS.UI.info.add('- Controls multiple undead servants')
NECROMANCER_CLASS.UI.info.add('- Uses mana as a resource')
NECROMANCER_CLASS.UI.description
    .set("Necromancers raise and control the undead, and brings plague and destruction on their foes. Necromancy is strictly forbidden in both Horde and Alliance societies, and those who practice it can only do so in absolute secrecy.")

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