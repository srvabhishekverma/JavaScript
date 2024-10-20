 // for ecah loop returning nahi karta hai
// const coding=["js", "css", "ruby","python","cpp"]
// const Values=coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(Values);




// Filter functions // values returned  karta hai
const myNums=[1,2,3,4,5,6,7,8]
// const newNums =myNums.filter( (num) =>{
//     return num > 4
// } )
// const newNums=[]
// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1998, edition: 2004 },
    { title: 'Book Two', genre: 'Non Fiction', publish: 1995, edition: 2001 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2005 },
    { title: 'Book Four', genre: 'Science', publish: 1996, edition: 2002 },
    { title: 'Book Five', genre: 'Fiction', publish: 1997, edition: 2003 },
    { title: 'Book Six', genre: 'Science', publish: 1990, edition: 2009 },
];

let userBooks = books.filter( (bk) => bk.genre === 'Fiction');
userBooks=books.filter( (bk) => {
     return bk.publish >=1995 && bk.genre==="History"})
console.log(userBooks);

