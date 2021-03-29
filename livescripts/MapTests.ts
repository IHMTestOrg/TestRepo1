export function MapTests(events: TSEventHandlers) {
    events.Maps.OnCheckEncounter((map,player)=>{})
    events.Maps.OnCreate((map)=>{})
    events.Maps.OnCreatureCreate((map,c,cancel)=>{})
    events.Maps.OnCreatureRemove((map,c)=>{})
    events.Maps.OnGameObjectCreate((map,obj,cancel)=>{})
    events.Maps.OnGameObjectRemove((map,obj)=>{})
    events.Maps.OnPlayerEnter((map,pl)=>{})
    events.Maps.OnPlayerLeave((map,pl)=>{})
}