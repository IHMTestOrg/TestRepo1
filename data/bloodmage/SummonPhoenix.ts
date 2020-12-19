import { std } from 'tswow-stdlib';
import { DBC } from 'wotlkdata/dbc/DBCFiles';
import { BLOOD_MAGIC_SKILL } from './BloodMage';

const PHOENIX_DISPLAYINFO = DBC.CreatureDisplayInfo
    .findById(17765).CreatureModelScale.set(0.7)

export const PHOENIX = std.CreatureTemplates
    .create('tswow-necromancer','phoenix', 416)
    .Models.set([PHOENIX_DISPLAYINFO.ID.get()])
    .Name.set({enGB:'Phoenix'})

export const SUMMON_PHOENIX = std.Spells
    .create('tswow-necromancer','summon-phoenix', 688)
    .Effects.get(0).MiscValueA.set(PHOENIX.ID).up()
    .SkillLines.add(BLOOD_MAGIC_SKILL.ID).up()
    .Name.set({enGB:'Summon Phoenix'})
    .Icon.set('Interface\\Icons\\BTNMarkOfFire.blp')
    .CastTime.set(0,0,0)
    .SkillLines.add(BLOOD_MAGIC_SKILL.ID).setAutolearn()

std.Spells.load(3110)
    .CastTime.set(0,0,0)