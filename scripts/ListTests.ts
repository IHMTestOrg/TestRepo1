let globalArr: TSArray<int32> = [];

function listFunction(arr: TSArray<uint32>) {
    console.log("This is [1,2,3]: ",arr);
    arr.push(1007688);
}

export function ListTests(events: TSEventHandlers) {
    let ls1: TSArray<int32> = [1,2,3];
    console.log("[reduce] This is 6:",ls1.reduce((p,c,i)=>p+c,0));

    let ls2: TSArray<int32> = [4];
    let ls3 = ls1.concat(ls2);

    console.log("[concat/forEach]: Should print 1,2,3,4")
    ls3.forEach((v,i)=>{
        console.log(v);
    });

    console.log("[concat] This is 3, -1:",ls3.indexOf(4),ls1.indexOf(4))
    console.log("[join] This is 1,2,3,4: ",ls3.join(','))

    ls3.push(5);
    console.log("[push] This is 5:",ls3.get(4))

    ls3.set(4,10);
    console.log("[set] This is 10:",ls3.get(4))

    const ls4 = ls3.filter((v,i)=>{
        return v==1;
    });

    console.log("[filter] This is 1:",ls4.join(''))

    console.log("[reduce] This is 21:",ls3.reduce((p,c,i)=>p+c,1))

    console.log("[slice] This is 1,2:",ls3.slice(0,2).join(','));

    ls3.shift();
    console.log("[shift] This is 2:",ls3);

    events.Player.OnSay((player,type,lang,msg)=>{
        globalArr.push(type);
    });

    const list: TSArray<uint32> = [1,2,3];
    listFunction(list);
    console.log("This is [1,2,3,1007688]:",list);
}