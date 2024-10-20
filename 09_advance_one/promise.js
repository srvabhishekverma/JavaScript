// 1 Steps

// const promiseOne=new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography,network 
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()  // connect to the then keyword 
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// 2nd step
new Promise(function(resolve, reject){
    setTimeout(function(){
     console.log("Async task 2");
     resolve()   
    },1000)
}).then(function(){
    console.log("Async 2 reolved");
})

//3
const promiseThree=new Promise(function(resolve, reject0){
    setTimeout(function(){
        resolve({username:"Abhi",email:"chaiexample.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);

})



//4

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Abhishek",password:"123"})
        }else{
            reject('ERROR: Something went wrong ')
        }
    },1000)
})
promiseFour.then((user)=>{
   console.log(user);
   return user.username 
})
.then((username)=>{ // chainging
    console.log(username);
})
.catch(function(error){ // chainging
    console.log(error);
}).finally(()=> console.log("THe promise is either fulfilled or rejected"))




// 5


const promiseFive=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Ak",password:"123"})
        }else{
            reject('ERROR:js went wrong ')
        }
    },1000)
})
async function consumePromiseFive(){
  try{
    const response=await promiseFive
   console.log(response);
 }catch(error){
    console.log(error);
 }
}
consumePromiseFive()


// async function getAllUsers(){
//    try{
//   const response= await fetch('https://api.github.com/users/Abhishekverma8858')
// //   console.log(response);
//   const data= await response.json()
//   console.log(data);
//  }catch(error){
//     console.log("E: ",error);
//  }
// }
// getAllUsers()

// node js ka features hai
fetch ('https://api.github.com/users/Abhishekverma8858')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error)=> console.log(error))