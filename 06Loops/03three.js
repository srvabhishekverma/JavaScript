// for of
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}


// for of loop implementations strings

const greeting ="Hello world"
for (const greet of greeting) {
    //console.log(`Ecah char is ${greet}`);
    
}


// Maps functions
const map=new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('US',"Canada")
map.set('US',"Canada")
//console.log(map);

for (const [key,value] of map) {
   // console.log(key,':-',value);
    
}

// objects ke uper for off loop // not a working 
// const myObject={
//     game1: 'NFS',
//     game2:'Spiderman'
// // }
// // for (const [key, value] of myObject){
// //     console.log(key,':-',value);
    
// }


// for  in loop

const myObject={
    js:'javascript',
    cpp:'cpp',
    rb:'ruby',
    swift:'swift'
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


// Array for in loop working 
const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
   // console.log(programming[key]);
}





// Forecah loop working
const coding=["js","rb","py","java","cpp"]
// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })



//decalre object accees 
const myCoding =[
   {
        languageName:"javascript",
        languageFileName:"js",
   },
   {
        languageName:"java",
        languageFileName:"java",
   },
   {
        languageName:"python",
        languageFileName:"py",
   },

]
myCoding.forEach( (item) => {
    console.log(item.languageName);
})