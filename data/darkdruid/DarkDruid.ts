import { std } from "tswow-stdlib";

const DRUID_ROBE = std.Items
    .create('tswow-necromancer','druid-robe',20407)
    .RequiredLevel.set(1)

const DRUID_SHOULDERS = std.Items
    .create('tswow-necromancer','druid-shoulders',20406)
    .RequiredLevel.set(1)

export const DARK_DRUID = std.Classes
    .create('tswow-necromancer','darkdruid','DARKDRUID','MAGE')
    .addRaces(['HUMAN','NIGHTELF','DWARF','ORC','UNDEAD'])
    .Name.set({enGB:'Dark Druid'})
    .EquipSkills.Staves.setAuto()
    .EquipSkills.Cloth.setAuto()
    .StartGear.Chest.set(DRUID_ROBE.ID)
    .StartGear.Shoulder.set(DRUID_SHOULDERS.ID)
    .UI.tcoords.set(0.5,0.75,0.75,1)
    .UI.info.add('- Role: Damage, Tank, Healer.')
    .UI.info.add('- Medium armor (Leather).')
    .UI.info.add('- Shape-shifts into insectoid and reptile forms.')
    .UI.info.add('- Versatile: can fill a healing, tanking, melee or caster role.')
    .UI.info.add('- Uses mana, rage or energy as a resource depending on form.')
    .UI.description.set('Dark druids are shunned by both Alliance and Horde druid organizations, as their forms of worship are often seen as taboo. Just like their other druid brethren, Dark Druids are shapeshifters, but has a particular focus on insectoid and reptile forms.')

export const METAMORPHOSIS = std.SkillLines
    .createClass('tswow-necromancer','Metamorphosis',DARK_DRUID.ID)
    .Name.set({enGB:'Metamorphosis'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_Metamorphosis.blp')

export const DARK_MAGIC = std.SkillLines
    .createClass('tswow-necromancer','dark-magic',DARK_DRUID.ID)
    .Name.set({enGB:'Dark Magic'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_SealOfKings.blp')