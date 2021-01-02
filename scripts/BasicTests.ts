class TestClass {
    a: int = 25;
}

class TestContainer {
    inner: TestClass = new TestClass();
}

let arr : TSArray<TestContainer> = [];

export function BasicTests(events: TSEventHandlers) {
    // number types
    let a: uint8 = 1;
    let b: int8 = 2;
    let c: uint16 = 3;
    let d: int16 = 4;
    let e: uint32 = 5;
    let f: int32 = 6;
    let g: uint64 = 7;
    let h: int64 = 8;
    let i: float = 9;
    let j: double = 10;

    let str = b + " ";
    let str1 = " " + b;

    // Class references and array entries
    let container = new TestContainer();
    container.inner.a = 150;
    arr.push(new TestContainer());
    arr.push(container);
    arr.get(0).inner.a = 200;
    console.log("This should be 200:",arr.get(0).inner.a);
    arr.get(0).inner = arr.get(1).inner;
    arr.get(0).inner.a = 150;
    console.log("This should be 150:",arr.get(1).inner.a);
    console.log("This should be 150:",arr.get(0).inner.a);

    const arr2 = arr.filter((v,i)=>i==0);
    console.log("This should be 1:",arr2.length);
    console.log("This should be 2:",arr.length);

    arr.set(0,new TestContainer());

    // Maps
    let numMap = MakeDictionary<uint64,string>({
        1:"value1",
        2:"value2"
    });
    console.log("Length should be 2:");
    console.log("This should be 105:",numMap.reduce((p,c,i)=>p+c,4));

    // Boolean operators
    if(true == true || true == true && true === true || 1 > 2 || 1 >= 2 || 1 <= 2 || 1 < 2) {
        console.log("This will print");
    }

    console.log("Sum of things: ",numMap.reduce((p,c,i)=>p+c,0));

    numMap.forEach((key,value)=>{
        console.log(key,' ',value);
    });
}