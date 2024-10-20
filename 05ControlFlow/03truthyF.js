const userEmail=[]
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("dont have user email");
}



// Falsy values

//false, 0, -0, BigInt, "",null,undefined,NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){},


// How to check empty objects 
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}




// Nullish Coalescing Operators (??): null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 15
val1=null ?? 10 ?? 15
//console.log(val1); // 5  //10



// Terniary Operators 
// condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")
