const score = 450
console.log(score);

const bal = new Number(457)
console.log(typeof(bal))
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));

const hscore = 455.5698754
console.log(hscore.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

/// Maths ///
// console.log(Math)
// console.log(Math.abs(-10))
// console.log(Math.round(4.4))
// console.log(Math.round(4.5))

// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

// console.log(Math.sqrt(144))

// console.log(Math.min(-5,4,45,89,7,42.2))
// console.log(Math.max(-5,4,45,89,7,42.2))

console.log(Math.random())// give values between 0 and 1 e.g 0.2
console.log(Math.floor(Math.random()*10)+1)


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1 )) + min)