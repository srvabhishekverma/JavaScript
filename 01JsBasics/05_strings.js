const name="ABhishek"
const repoCont=50
//console.log(name+repoCont+"Value");
// modern way 
console.log(`Hello my name is ${name} and my reop count is ${repoCont}`);

// second types of strings
const gameName=new String(`Ram`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


const newString=gameName.substring(0,2);
console.log(newString);

const anotherString =gameName.slice(-3,0);
console.log(anotherString);

const newStringOne="   Abhishek    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim function remove the space 

const url="https://Abhishek.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
