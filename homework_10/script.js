'use strict';


function Fibo() {
   let a = 0
   let b = 1
   
   console.log(a);
   console.log(b);

  
   const button = document.querySelector('.button');
   
   button.addEventListener('click', function () {
           let c = a + b;
           document.querySelector('.result').innerHTML = c;
           a = b;
           b = c;
         return console.log(c)
   })
};

const fibonacci = Fibo();
 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 
console.log(fibonacci()); 