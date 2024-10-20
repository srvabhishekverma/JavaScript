// Reduce Function
 const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);
// console.log(myTotal);
 



// ARray Functions main likhana

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js couse",
        price:1200,
        quantity:2,
    },
    {
        itemName:"php couse",
        price:1204,
        quantity:1,
    },
    {
        itemName:"python couse",
        price:1207,
        quantity:7,
    },
    {
        itemName:"ruby couse",
        price:1204,
        quantity:6,
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);