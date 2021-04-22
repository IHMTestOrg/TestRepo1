import { std } from 'tswow-stdlib';
import { DBC } from 'wotlkdata/dbc/DBCFiles';
import { TSWOW_TESTMODULE } from '../../tswow-testmodule';
import { BLOOD_MAGIC_SKILL } from './BloodMage';

const PHOENIX_DISPLAYINFO = DBC.CreatureDisplayInfo
    .findById(17765).CreatureModelScale.set(0.7)

export const PHOENIX = std.CreatureTemplates
    .create(TSWOW_TESTMODULE,'phoenix', 416)
    .Models.addIds(PHOENIX_DISPLAYINFO.ID.get())
    .Name.set({enGB:'Phoenix'})

export const SUMMON_PHOENIX = std.Spells
    .create(TSWOW_TESTMODULE,'summon-phoenix', 688)
    .Effects.get(0).MiscValueA.set(PHOENIX.ID).end
    .SkillLines.add(BLOOD_MAGIC_SKILL.ID).end
    .Name.set({enGB:'Summon Phoenix'})
    .Icon.set('Interface\\Icons\\BTNMarkOfFire.blp')
    .CastTime.set(0,0,0)
    .SkillLines.add(BLOOD_MAGIC_SKILL.ID).setAutolearn()

std.Spells.load(3110)
    .CastTime.set(0,0,0)