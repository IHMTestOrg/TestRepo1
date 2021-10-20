import { std } from "tswow-stdlib";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";

std.Items.load(27488).RequiredLevel.set(1)
std.Items.load(27994).RequiredLevel.set(1)
std.Items.load(29925).RequiredLevel.set(1)
std.Items.load(34399).RequiredLevel.set(1)
std.Items.load(30924).RequiredLevel.set(1)

export const BLOODMAGE = std.Classes
    .create(TSWOW_TESTMODULE,'bloodmage','MAGE')
    .addRaces(['BLOODELF','HUMAN'])
    .Name.set({enGB:'Blood Mage'})
    .EquipSkills.Staves.setAuto()
    .EquipSkills.Cloth.setAuto()
    .UI.TCoords.set(0.75,1,0.5,0.75)
    .UI.ClassButton.setPos(-46,-420)
    .UI.Info.add('- Role: Damage')
    .UI.Info.add('- Light armor (Cloth).')
    .UI.Info.add('- Summons a Phoenix')
    .UI.Info.add('- Uses blood and fire magic')
    .UI.Description.set('Blood mages are fearsome spellcaster who abandoned the water and frost magic of the Kirin-Tor, instead favoring a combination of Fire magic and Blood worship. Blood mages are good wizards gone bad who do what they have to do, dedicated to leaving this damn prison one way or another.')
    .StartGear.clear(['Male','Female'],[])
    .StartGear.Chest.set(34399)
    .StartGear.Head.set(27488)
    .StartGear.Shoulder.set(27994)
    .StartGear.Mainhand.set(20978)
    .StartGear.Hands.set(30924)

export const BLOOD_MAGIC_SKILL = std.SkillLines
    .createClass(TSWOW_TESTMODULE,'blood',BLOODMAGE.ID)
    .Name.set({enGB:'Blood Magic'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_BloodBoil.blp')