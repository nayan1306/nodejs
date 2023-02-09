// Returns the elements of an array that meet the condition specified in a callback function.

const arr = [1,2,3,4,5,6,7]
console.log("-------------------------")
arr.filter((item)=>{
    console.log(item)
})


console.log("-------------------------")
let result = arr.filter((item)=>{
    return item>=3
})
console.warn(result)


//console.log("-------------------------")
//let res = arr.filter((item)=>{
//    return item>2
//})
//console.warn(res)