class InnerClass {
    field: int64 = 100;
    innerMethod() {
        console.log("Inner method called!");
    }
}

class TestClass {
    field: int32 = 25;
    inner: InnerClass = new InnerClass();
    outerMethod() {
        console.log("Outer method called!");
        this.inner.innerMethod();
    }
}

class ClassExtension extends TestClass {
    outerMethod() {
        console.log("Overridden method called!");
    }
}

class CollectionClass extends TSClass {
    arr: TSArray<int> = [];
    dict : TSDictionary<int,int> = MakeDictionary<int,int>({1:10})
}

const globalCollection : CollectionClass = new CollectionClass();

export function ClassTests(events: TSEventHandlers) {
    let g = new TestClass();
    g.outerMethod();

    let e = new ClassExtension();
    e.outerMethod();
    console.log(e.field);

    const arr: TSArray<TestClass> = [new TestClass(), new ClassExtension()];
    arr.forEach((v,i)=>{
        v.outerMethod();
    });

    events.Player.OnSay((player,type,lang,msg)=>{
        globalCollection.arr.push(10);
        globalCollection.dict.set(10,25);
        console.log(globalCollection.stringify());
    });
}