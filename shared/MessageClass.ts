@Message
export class InnerMessageClass {
    @MsgPrimitive
    uinner: uint8 = 0
}

@Message
export class MessageClass {
    @MsgPrimitive
    u8: uint8 = 0;

    @MsgPrimitive
    i8: int8 = 0;

    @MsgPrimitive
    u16: uint16 = 0;

    @MsgPrimitive
    i16: int16 = 0;

    @MsgPrimitive
    u32: uint32 = 0;

    @MsgPrimitive
    i32: int32 = 0;

    @MsgPrimitive
    d1: double = 0;

    @MsgPrimitive
        d2: double = 0

    @MsgPrimitiveArray(3)
    parr: TSArray<uint32> = [0,0,0]

    @MsgString(3)
    str: string = "abcdefg";

    @MsgStringArray(3,3)
    sarr: TSArray<string> = ["abc","defg","h"];

    @MsgClass
    inner: InnerMessageClass = new InnerMessageClass();

    @MsgClassArray(3)
    iarr: TSArray<InnerMessageClass> = [new InnerMessageClass(), new InnerMessageClass(), new InnerMessageClass(), new InnerMessageClass()];
}

@Message
export class Alternative {
    ialt: int8 = -5;
}