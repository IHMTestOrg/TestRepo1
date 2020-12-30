import { std } from "tswow-stdlib";
import { DBC } from 'wotlkdata';
import { Ids } from 'tswow-stdlib/Base/Ids';
import { METAMORPHOSIS } from "./DarkDruid";
import { TSWOW_TESTMODULE } from "../../tswow-testmodule";

const SWARMGUARD_DISPLAYINFO = DBC.CreatureDisplayInfo.findById(15354)
    .clone(Ids.CreatureDisplayInfo.id())
    .CreatureModelScale.set(0.6)

const SPIDER_FORM_SHAPESHIFT = DBC.SpellShapeshiftForm.findById(5)
    .clone(Ids.SpellShapeshiftForm.id())
    .CreatureDisplayID.setIndex(0,6808)

const SCORPID_FORM_SHAPESHIFT = DBC.SpellShapeshiftForm.findById(1)
    .clone(Ids.SpellShapeshiftForm.id())
    .CreatureDisplayID.setIndex(0,15384)

const SWARMGUARD_FORM_SHAPESHIFT = DBC.SpellShapeshiftForm.findById(31)
    .clone(Ids.SpellShapeshiftForm.id())
    .CreatureDisplayID.setIndex(0,SWARMGUARD_DISPLAYINFO.ID.get())

export const SPIDER_FORM = std.Spells.create(TSWOW_TESTMODULE,'spider-form',5487)
    .Name.set({enGB:'Spider Form'})
    .Icon.set('Interface\\Icons\\Ability_Hunter_Pet_Spider.blp')
    .SkillLines.add(METAMORPHOSIS.ID).setAutolearn().end
    .Effects.get(0).MiscValueA.set(SPIDER_FORM_SHAPESHIFT.ID.get()) 

export const SCORPID_FORM = std.Spells.create(TSWOW_TESTMODULE,'scorpid-form',768)
    .Name.set({enGB:'Scorpid Form'})
    .Icon.set('Interface\\Icons\\Ability_Hunter_Pet_Scorpid.blp')
    .SkillLines.add(METAMORPHOSIS.ID).setAutolearn().end
    .Effects.get(0).MiscValueA.set(SCORPID_FORM_SHAPESHIFT.ID.get())

export const SWARMGUARD_FORM = std.Spells.create(TSWOW_TESTMODULE,'swarmguard-form',24858)
    .Name.set({enGB:'Swarmguard Form'})
    .Icon.set('Interface\\Icons\\Spell_Shadow_CarrionSwarm.blp')
    .SkillLines.add(METAMORPHOSIS.ID).setAutolearn().end
    .Effects.get(0).MiscValueA.set(SWARMGUARD_FORM_SHAPESHIFT.ID.get())