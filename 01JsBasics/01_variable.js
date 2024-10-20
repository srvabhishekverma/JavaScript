const accountId=12332;
let accountEmail="abhiverma891@gmail.com";
var accountPassword="1234";
accountCity="Spn";

//accountId=1; // not allowed
accountEmail="aanjk@gmai.com"; // allowed
accountPassword="123456"; // allowed
accountCity="New York"; // allowed


console.log(accountId);
console.table([accountId, accountEmail,accountPassword,accountCity])


/*
prefer not to use var
because of issue in block scope and functional scope

*/