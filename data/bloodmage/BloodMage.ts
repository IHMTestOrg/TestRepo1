import { std } from "tswow-stdlib";

std.Items.load(27488).RequiredLevel.set(1)
std.Items.load(27994).RequiredLevel.set(1)
std.Items.load(29925).RequiredLevel.set(1)
std.Items.load(34399).RequiredLevel.set(1)
std.Items.load(30924).RequiredLevel.set(1)

export const BLOODMAGE = std.Classes
    .create('tswow-necromancer','bloodmage-class','BLOODMAGE','MAGE')
    .addRaces(['BLOODELF','HUMAN'])
    .Name.set({enGB:'Blood Mage'})
    .EquipSkills.Staves.setAuto()
    .EquipSkills.Cloth.setAuto()
    .UI.tcoords.set(0.75,1,0.5,0.75)
    .UI.classButton.setPos(-46,-420)
    .UI.info.add('- Role: Damage')
    .UI.info.add('- Light armor (Cloth).')
    .UI.info.add('- Summons a Phoenix')
    .UI.info.add('- Uses blood and fire magic')
    .UI.description.set('Blood mages are fearsome spellcaster who abandoned the water and frost magic of the Kirin-Tor, instead favoring a combination of Fire magic and Blood worship. Blood mages are good wizards gone bad who do what they have to do, dedicated to leaving this damn prison one way or another.')

BLOODMAGE.StartGear.clear(['Male','Female'],[]);
BLOODMAGE.StartGear.Chest.set(34399)
BLOODMAGE.StartGear.Head.set(27488)
BLOODMAGE.StartGear.Shoulder.set(27994)
BLOODMAGE.StartGear.Mainhand.set(20978)
BLOODMAGE.StartGear.Hands.set(30924)

export const BLOOD_MAGIC_SKILL = std.SkillLines
    .createClass('tswow-necromancer','blood',BLOODMAGE.ID)
    .Name.set({enGB:'Blood Magic'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_BloodBoil.blp')