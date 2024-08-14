let score = "45" 
let a = "34gg"
let b = null
let u = undefined;
let bool = true
let valueNumber = Number(score) // Number() => datatype conversion in number but some value like "45dd", "string" , "null" ,undefined, converts to Nan Not a number
let valueMixed = Number(a)
let nullValue  = Number(b)
let unDefined = Number(u)
let boolValue = Number(bool)

console.log(score)
console.log(typeof (score))

console.log(valueNumber)
console.log(typeof valueNumber)

console.log(valueMixed)
console.log(typeof valueMixed)

console.log(nullValue)
console.log(typeof nullValue)

console.log(unDefined)
console.log(typeof unDefined) 

console.log(boolValue)
console.log(typeof boolValue)
// 1."33" => 33
// 2."33abc" or "Bhushan" => NaN
// 3."null" => NaN
// 4."undefined" => undefined
//5. "true" => "1" or "false" => "0"

let isLoggedin = 0
let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)
let c = "roshan"
let boolean=Boolean(c)
console.log(boolean)

// boolean conversion 
// 0 => false
// 1 => true 
//  "" => false
// "Roshan" => true