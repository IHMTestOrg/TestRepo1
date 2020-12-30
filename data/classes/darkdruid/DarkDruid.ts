import { std } from "tswow-stdlib";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";

const DRUID_ROBE = std.Items
    .create(TSWOW_TESTMODULE,'druid-robe',20407)
    .RequiredLevel.set(1)

const DRUID_SHOULDERS = std.Items
    .create(TSWOW_TESTMODULE,'druid-shoulders',20406)
    .RequiredLevel.set(1)

export const DARK_DRUID = std.Classes
    .create(TSWOW_TESTMODULE,'darkdruid','DARKDRUID','MAGE')
    .addRaces(['HUMAN','NIGHTELF','DWARF','ORC','UNDEAD'])
    .Name.set({enGB:'Dark Druid'})
    .EquipSkills.Staves.setAuto()
    .EquipSkills.Cloth.setAuto()
    .StartGear.Chest.set(DRUID_ROBE.ID)
    .StartGear.Shoulder.set(DRUID_SHOULDERS.ID)
    .UI.TCoords.set(0.5,0.75,0.75,1)
    .UI.Info.add('- Role: Damage, Tank, Healer.')
    .UI.Info.add('- Medium armor (Leather).')
    .UI.Info.add('- Shape-shifts into insectoid and reptile forms.')
    .UI.Info.add('- Versatile: can fill a healing, tanking, melee or caster role.')
    .UI.Info.add('- Uses mana, rage or energy as a resource depending on form.')
    .UI.Description.set('Dark druids are shunned by both Alliance and Horde druid organizations, as their forms of worship are often seen as taboo. Just like their other druid brethren, Dark Druids are shapeshifters, but has a particular focus on insectoid and reptile forms.')

export const METAMORPHOSIS = std.SkillLines
    .createClass(TSWOW_TESTMODULE,'Metamorphosis',DARK_DRUID.ID)
    .Name.set({enGB:'Metamorphosis'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_Metamorphosis.blp')

export const DARK_MAGIC = std.SkillLines
    .createClass(TSWOW_TESTMODULE,'dark-magic',DARK_DRUID.ID)
    .Name.set({enGB:'Dark Magic'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_SealOfKings.blp')