//this current context   ko refer karta hai 
const user={
    username:"Abhishek",
    price:199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()
//console.log(this)

// function chai(){
//     let username="Abhishek"
//     console.log(this.username);
// }
// chai()
  

// Arrow Functions

// const chai=function(){
//     let username="Abhishek"
//     console.log(this.username)

// }
// chai()


const chai=()=>{
    let username="Abhishek"
    console.log(this)

}
//chai()


// ARROW Functions

// const addTwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(2,5))


// Implicit return function
const addTwo=(num1,num2)=> num1+num2
console.log(addTwo(2,5))