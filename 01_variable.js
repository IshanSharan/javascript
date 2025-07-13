const accountId=144553
let accountEmail="ishan@google.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId = 2 //not allowed if its given in const doesnot change
 accountPassword=23
accountEmail="hc@hc.com"
accountCity="bangalore"
let accountState;
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var bcz of issue in block scope and functional scope
*/
 console.log(accountCity);
 
 