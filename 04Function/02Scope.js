let a=300
if(true){
    let a=10
    const b=20
    var c=40
    //console.log("INNER: " , a);
}

//console.log(a);
// console.log(b);
//console.log(c);





// NESTED SCOPE
function one(){
    const username="Abhishek"
    function two(){
        const website="you tube"
        console.log(username);
    }
    //console.log(website); 
    two();
}
//one();


if(true){
    const username="Abhishek"
    if(username==="Abhishek"){
        const website=" you tube"
       // console.log(username + website );
    }
   // console.log(website);
}
//console.log(username);







//+++++++++++++++++++++++++++++++  interesting       +++++++++++++++++++++++++++
// 1 Types of functions

 console.log (addone(7))
function addone(num){
    return num+1
}

// 2 function  ( ES KO HOSTING BOLTE HAI )
const addTwo=function(num){
    return num+2

}
addTwo(5)