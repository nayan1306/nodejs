console.warn("------Node basics------")
console.log("Hello node");
var a = 30;
var b = 40;
console.warn(a+b);
let x = 20;
const y = 30;
console.warn("------If conditions------")
// Using === the value and the type is matched
if(x===20)
{
    console.log("Matched");
}

x='20'
if(x==20)
{
    console.log("Matched");
}
// Using == only the value is matched
if(x===20)
{
    console.log("Matched");
}

console.warn("----- For loop -----")
for(i=0; i<10; i++)
{
    console.log(i)
}

console.warn("---- arrays ----")
var arr = [1,2,3,4,5]
console.log(arr)

