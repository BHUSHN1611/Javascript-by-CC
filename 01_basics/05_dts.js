// There are basically two types of datatypes in any prog.lang

// 1.Primitive(Call by value) 
// there are 7types of datatype in Primitive 
//:1.String,2.Number,3.Boolean,4.Null,5.Undefined,6.Symbol,7.BigInt

//2.Non-Primitive (call by reference)
//1.Array 2.Objects 3.Function

const score = 454
const scorevalue = 45.5 

const isLoggedin = false
const temperature = null

let useremail;
console.log(useremail)

// conmparing symbol datetype using strict check 
const  id = Symbol('123')
console.log(id)

const newid = Symbol('123')
console.log(id === newid)
// we got false , there return values are different 

const bigNumber = 45788956123855555n
console.log("BIGINT",typeof(bigNumber))

// Non-primitive 

// Array , Object , Function

const heros =  ["shaktiman","naagraj","spiderman"]

let obj = {
    name : "bhushan",
    age : "22",
    gen : "male"
}

const myfunn = function(){
    console.log("My function is printing...")
}
console.log("sym",typeof id)
console.log("NuLL",typeof temperature )
console.log("array",typeof heros)
console.log("Object",typeof obj)
console.log("Function",typeof myfunn)

// fun fact : Return type of Non-primitive datatype is a Object , function ka bhi functionobject 

// Heap and stack memory allocation

// Primitive datatype uses Stack memory allocation and Non-Primitive Datatypes uses Heap memory allocation

// Stack gives a copy of original and Heap gives original reference value 
// stack example 
let rname =  "Bhushan"
let ogname = rname // Its get a copied of rname var instead of rel reference 
ogname = "roshan"
console.log(ogname) // op: roshan , in this we change the value but the rname value dont get affected because we get a copy of the rname .

console.log(rname)// op: Bhushan 

// Heap examples
let heap = {
    name:"Bhshan",
    age : 45
}
console.log(heap) // in this we change the value and the change got affected in the main varible 
let heap2 = heap 

heap.name = "Roshan"
console.log(heap)
