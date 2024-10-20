// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


function sayMYName(){
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
//sayMYName();

//function

// // function addTwoNumbers(number1, number2){
// // console.log(number1+number2);
// // }
// const result=addTwoNumbers(1,3)
// console.log("result:", result);




// Function 


function addTwoNumbers(number1, number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
    }
const result=addTwoNumbers(1,3)
// console.log("result:", result);



function loginUseMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUseMessage("Abhi"))
 //console.log(loginUseMessage(""))
 //console.log(loginUseMessage())




 // REST OPERATION
 function addcalatecartPrice(...num1){
    return num1
 }
 //console.log(addcalatecartPrice(200,300,2033));




 // Hoe to use object using  function
const user={
    username:"Abhishek",
    price:199
}
function handleObject(anyobject){
console.log(`user is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"Vikash",
    price:1999
})




// Hoe to use Arrays using  function

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
