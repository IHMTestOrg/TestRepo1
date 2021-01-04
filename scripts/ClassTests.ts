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

export function ClassTests(events: TSEventHandlers) {
    let g = new TestClass();
    g.outerMethod();

    let e = new ClassExtension();
    e.outerMethod();
    console.log(e.field);

    let arr: TSArray<TestClass> = [new TestClass(), new ClassExtension()];
    arr.forEach((v,i)=>{
        v.outerMethod();
    });
}