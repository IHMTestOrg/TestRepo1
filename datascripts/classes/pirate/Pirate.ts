import { std } from "tswow-stdlib";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";

export const PIRATE_HAT = std.Items.create(TSWOW_TESTMODULE,'pirate-hat',2955)
    .RequiredLevel.set(1)

export const PIRATE = std.Classes
    .create(TSWOW_TESTMODULE,'pirate','ROGUE')
    .addRaces(['HUMAN','NIGHTELF','DWARF','ORC','UNDEAD'])
    .Name.set({enGB:'Pirate'})
    .UI.TCoords.set(0.25,0.5,0.75,1)
    .UI.ClassButton.setPos(42,-420)
    .EquipSkills.Guns.setAuto()
    .EquipSkills.Leather.setAuto()
    .EquipSkills.Cloth.setAuto()
    .EquipSkills.Daggers.setAuto()
    .StartGear.Mainhand.clear()
    .StartGear.Offhand.clear()
    .StartGear.Head.set(PIRATE_HAT.ID)
    .StartGear.Thrown.clear()
    .StartGear.GunWand.set(2508)
    .UI.Info.add('- Role: Damage, Tank')
    .UI.Info.add('- Medium Armor (Leather)')
    .UI.Info.add(`- Guns n bombs`)
    .UI.Info.add(`- Engineerin Skill Bonus`)
    .UI.Info.add(`- Yar har`)
    .UI.Description.set(`Pirates are th' most anticipated crew in World o' Warcraft. 'tis a shame Blizzard wouldna add them, but thanks t' TSWoW ye can now throw bombs like ye're Bomberman even in yer fav'rit MMORPG.`)

const PIRACY_LINE = std.SkillLines.createClass(TSWOW_TESTMODULE,'piracy',PIRATE.ID)
    .Name.set({enGB:'Piracy'})
    .Icon.set('Interface\\Icons\\inv_helmet_66.blp')

export const SHOOT_YA = std.Spells.create(TSWOW_TESTMODULE,'shoot',3044)
    .Power.setEnergy(30)
    .SkillLines.add(PIRACY_LINE.ID).setAutolearn().end
    
export const DISENGAGE = std.Spells.create(TSWOW_TESTMODULE,'disengage',781)
    .Cooldown.set(5000,0,5000,1)
    .SkillLines.add(PIRACY_LINE.ID).setAutolearn().end

export const THROW_BOMB = std.Spells.create(TSWOW_TESTMODULE,'throw-bomb',4064)
    .InterruptFlags.OnMovement.clear()
    .SkillLines.add(PIRACY_LINE.ID).setAutolearn().end
    .Cooldown.set(2000,0,2000,2)
    .Name.set({enGB:'Throw Bomb'})

export const PIRATE_LANGUAGE = std.Languages
    .create(TSWOW_TESTMODULE,'pirate_language',{enGB:'Pirate'},[],[PIRATE.ID])
    .Name.set({enGB: 'Pirate'})
    .addWords(['ahoy','matey','deck','aye','booty','bounty','bucko','chanteys','loot',
        'me','rum','savvy','ho','ye','yo ho ho','tah','pirate','\'tis'])