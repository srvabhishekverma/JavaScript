// Immediately Invoke  Function Expression(IIFE)

// global funtion main polution na ho es liye likhte hai

(function chai(){
    // named  IIFE
console.log(`DB CONNECT`);
})();

(() => {
    console.log(`DB CONNECT TWO $(name)`);
})('Abhishek')