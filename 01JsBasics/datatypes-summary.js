// primitives 
// 7 types: string, number, boolean,null,undefined, symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId);

//const bigNumber=34587625n



// refence types non primitives
// arrays, objects, functions

//const hero=["ABhishek","Ram","Amitt"] // Ararrays

let myObj={
    name:"Abhsihek",
    age:34,
}


const myFunction=function(){
    //console.log("Hello")

}






// +++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitives), Heap(non primitives)
// satck main copy milta hai 
//heap se milta refence oriniginal value

// primitive // copy change
let myYouTube= "Abhishek"
let anothername=myYouTube
 anothername="Vikash"
 console.log(myYouTube);
console.log(anothername);

// non primitive // actual change
let useOne={
    email:"abhiverma8941@gmail.com",
    upi:"user@ybl"
}
let useTwo=useOne
 useTwo.email="ram@gmail.com"
 console.log(useOne.email);
 console.log(useTwo.email);
