const accountId = 161118 // not changeable values. 
let accountEmail = "bhushan@gmail.com"
var password = "12345"  // Issue in block scope and functional scope 

let accountState;

accountCity = "Virar" //  using this type of declaration in js is illegal ,  

//accountId = 452
console.log(accountId);
accountEmail = "bh@gmail.com"
password = "1254"
accountCity = "vasai"

// Prefer to use let instead of using var , its has scope problem 

console.table([accountEmail,password,accountCity,accountState])


