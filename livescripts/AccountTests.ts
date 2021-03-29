export function AccountTests(events: TSEventHandlers) {
    events.Account.OnAccountLogin((id)=>{
        console.log("Account logged in");
    });

    events.Account.OnEmailChange((id)=>{
        console.log("Emailed changed");
    });

    events.Account.OnFailedAccountLogin((id)=>{
        console.log("Failed login");
    });

    events.Account.OnFailedEmailChange((id)=>{
        console.log("Failed email change");
    });

    events.Account.OnFailedPasswordChange((id)=>{
        console.log("Failed password change");
    });

    events.Account.OnPasswordChange((id)=>{
        console.log("Password changed");
    });
}