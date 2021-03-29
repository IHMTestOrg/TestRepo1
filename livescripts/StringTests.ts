export function StringTests(events: TSEventHandlers) {
    const tsstring = "TSString";
    const u8 : uint8 = 255;
    const i8 : int8 = -126;
    const u16: uint16 = 65535;
    const i16: uint16 = -32768;
    const u32: uint32 = 4294967295;
    const i32: int32 = -2147483648;
    console.log("");
    console.log("[Concatenation] This should be TSString +-+-+- etc etc",tsstring+" "+u8+" "+i8+" "+u16+" "+i16+" "+u32+" "+i32+" ");
    console.log("[length] this should be 10: ","1111111111".length);
    console.log("[split] this should be ha-ha-ha","ha ha ha".split(" ").join(" "));
    console.log("[replaceAll] This is kekkek:"+"haha".replace("ha","kek"));
    console.log("[substring] This is b bb c:","abbc".substring(0,1));
    console.log("[charAt] This is a b c","abc".charAt(0),"abc".charAt(1),"abc".charAt(2));
    console.log("[endsWith] This is true true false: ","abc".endsWith("c"),"abc".endsWith("bc"),"abc".endsWith("ab"));
    console.log("[startsWith] This is true true false:","abc".startsWith("a"),"abc".startsWith("ab"),"abc".startsWith("bc"))
    console.log("[includes] This is true true true true false","abbc".includes("a"),"abbc".includes("bb"),"abbc".includes("abbc"),"abbc".includes("bb"));
}