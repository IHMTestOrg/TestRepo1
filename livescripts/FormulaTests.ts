export function FormulaTests(events: TSEventHandlers) {
    events.Formula.OnBaseGainCalculation((gain,level,moblevel,content)=>{
        console.log("hi?");
    });

    events.Formula.OnColorCodeCalculation((color,level,moblevel)=>{
        console.log("Color code calculation");
    });

    events.Formula.OnGainCalculation((gain,player,unit)=>{
        player.SendBroadcastMessage("Doing a gain calculation");
    });

    events.Formula.OnGrayLevelCalculation((graylevel,playerlevel)=>{
        console.log("Calculating gray level");
    });

    events.Formula.OnGroupRateCalculation((rate,count,israid)=>{
        console.log("Group rate calculation");
    });

    events.Formula.OnHonorCalculation((honor,level,multiplier)=>{
        console.log("Honor calculation");
    }),

    events.Formula.OnZeroDifferenceCalculation((diff,playerlevel)=>{
        console.log("Zero difference calculation");
    });
}