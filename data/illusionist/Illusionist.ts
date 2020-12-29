import { std } from "tswow-stdlib";

export const ILLUSIONIST = std.Classes
    .create('tswow-necromancer','illusionist','ILLUSIONIST','MAGE')
    .addRaces(['HUMAN','BLOODELF','DRAENEI','GNOME','TROLL'])
    .Name.set({enGB:'Illusionist'})
    .StartGear.Chest.set(43761)
    .UI.TCoords.set(0,0.25,0.75,1)
    .UI.ClassButton.setPos(-0,-420)
    .UI.Info.add('- Role: None, they\'re some kind of non-combat class')
    .UI.Info.add('- Light Armor (Cloth)')
    .UI.Info.add('- Can shapeshift into anything')
    .UI.Info.add('- I kind of ran out of ideas, sorry.')
    .UI.Description.set('Illusionists are mages who specialize in non-combat magic and trickery. Not much is known of these wizards as they tend to keep to themselves. You will simply have to play one to see for yourself.')

const VANISH = std.Spells.load(12398)

export const ILLUSION = std.SkillLines
    .createClass('tswow-necromancer','illusion',ILLUSIONIST.ID)
    .Name.set({enGB: 'Illusion'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_Teleport.blp')

export const TRANSFORM = std.Spells
    .create('tswow-necromancer','disguise',0)
    .SkillLines.add(ILLUSION.ID).setAutolearn().end
    .Effects.add().EffectType.setDummy().end
    .Icon.set('Interface\\Icons\\Ability_Rogue_Disguise.blp')
    .Visual.cloneFrom(1856,true)
    
export const SPECIAL_BLINK = std.Spells
    .create('tswow-necromancer','specialblink',2120)
    .SkillLines.add(ILLUSION.ID).setAutolearn().end
    .CastTime.set(0,0,0)

SPECIAL_BLINK.Effects.clearAll()
SPECIAL_BLINK.Visual.cloneFrom(1953)