// Map function value reatuen karta hai
// const myNumers=[1,2,3,4,5,6,7,8,9]
// const newNumns=myNumers.map( (num) => num+10)
// console.log(newNumns);




// Chaining function
const myNumers=[1,2,3,4,5,6,7,8,9]
const newNumns=myNumers
              .map( (num) => num*10 )
              .map( (num) => num+1 ) 
              .filter((num) => num>= 40)

console.log(newNumns);