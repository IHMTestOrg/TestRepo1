export function DictionaryTests(events: TSEventHandlers) {
    const d1 = MakeDictionary<uint32,string>({
        1: "a",
        2: "b",
    });

    console.log("[Dictionary] This is {1:a,2:b}: ");

    const keys = d1.keys();
    for(let i=0;i<keys.length;++i) {
        let key = keys.get(i);
        console.log(key,d1.get(key));
    }

    const d2 = d1.filter((k,v)=>v=='b');
    console.log("[filter] This is true false true:",d2.contains(2),d2.contains(1),d1.contains(1));

    d2.set(3,"c");
    console.log("[set] This is true false:",d2.contains(3),d1.contains(3));
    d2.set(3,"d");
    console.log("[set] This is 'd':",d2.get(3));

    console.log("[forEach]: Below is 2b, 3d")
    d2.forEach((k,v)=>{
        console.log(k,v);
    });

    console.log("[reduce] This is 5: ",d2.reduce((p,k,v)=>p+k,0));
    console.log("[contains] This is true false false:",d2.contains(2),d2.contains(1),d2.contains(4));
}