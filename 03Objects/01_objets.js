// singleton 


// objects literals
 
const mySyn=Symbol("key1")

const JsUser={
    name:"Abhishek",
    "full name": "Abhishek",
   [mySyn]:"mykey1",
    age:22,
    location:"spn",
    email:"abhishek@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday",  "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySyn]);

JsUser.email="abhishek@gmail11.com"
// Object.freeze(JsUser)
JsUser.email="abhishek@gmail22.com"
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js user!");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());