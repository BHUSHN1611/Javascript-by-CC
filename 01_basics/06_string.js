let a =  "Bhushan "

let score = 45 
// console.log(`My name is ${a} and my score is ${score}`)
                            //  012345678901
const gamename = new String('Pubg-Mobile')

// console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toLowerCase())
console.log("index",gamename.charAt(5))
console.log(gamename.indexOf('i'))

const newstr = gamename.substring(0,4)
console.log(newstr)
const anstr  = gamename.slice(-11)
console.log(anstr)

const space = "     Bhushan"
console.log(space.trim())
const start = "  Roshan"
console.log(start.trimStart())
const end = "Ravi   "
console.log(end.trimEnd())

const url = "https://www.google.com"
console.log(url.replace('google','amazon'))

console.log(url.includes('flipcart'))

const arr = "Bhushan Liladhar Jadhav"

console.log(arr.split(" "))
