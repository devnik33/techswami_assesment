/**
 * Problem 1: Closure and Scope
 *
 * Implement a function `createCounter` that returns a counter function.
 * The counter function should return a sequential number each time it's called, starting from 1.
 *
 * @returns {function} - A function that returns the next number in the sequence.
 */
export function createCounter() {
    // Implement here
   let total=1;
   return function(){
    return total++;
   }
   
}
let counter=createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

