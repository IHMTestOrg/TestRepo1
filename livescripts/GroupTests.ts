export function GroupTests(events: TSEventHandlers) {
    events.Group.OnAddMember((group,guid)=>{
        console.log("A group added a member");
    });

    events.Group.OnChangeLeader((group,newGuid,oldGuid)=>{
        console.log("A guild changed leader");
    });

    events.Group.OnDisband((group)=>{
        console.log("A group was disbanded");
    });

    events.Group.OnInviteMember((group,guid)=>{
        console.log("A group member was invited");
    });

    events.Group.OnRemoveMember((group,guid,method,kicker,reason)=>{
        console.log("A group member was removed");
    });
}