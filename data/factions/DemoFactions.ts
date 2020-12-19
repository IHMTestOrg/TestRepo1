import { std } from "tswow-stdlib";

std.Factions.create('tswow-necromancer','tswow-faction')
    .Name.set({enGB:'TSWoW Team'})
    .Reputation.enable('tswow-necromancer','tswow-reputation')

std.Factions.create('tswow-necromancer','tswow-knights')
    .Name.set({enGB:'Knights of the Round Table'})
    .Reputation.enable('tswow-necromancer','tswow-reputation-knights')

std.Factions.create('tswow-necromancer','tswow-tc')
    .Name.set({enGB:'TrinityCore'})
    .Reputation.enable('tswow-necromancer','tswow-reputation-tc')

std.Factions.create('tswow-necromancer','tswow-cult-faction')
    .Name.set({enGB:'Cult of the Damned'})
    .Reputation.enable('tswow-necromancer','tswow-reputation-cult-rep')

std.Factions.create('tswow-necromancer','tswow-your')
    .Name.set({enGB:'Your Faction Here'})
    .Reputation.enable('tswow-necromancer','tswow-reputation-your-rep')