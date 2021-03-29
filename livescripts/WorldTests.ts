export function WorldTests(events: TSEventHandlers) {
    events.World.OnConfigLoad((reload)=>{
        console.log("World config was loaded");
    });

    events.World.OnMotdChange((newmotd)=>{
        console.log("The motd was changed");
    });

    events.World.OnOpenStateChange((open)=>{
        console.log("World Open state changed");
    });

    events.World.OnShutdownInitiate((code,mask)=>{
        console.log("Server shutting down");
    });

    events.World.OnUpdate((diff)=>{
        // Don't print here
    });
}