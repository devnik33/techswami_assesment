/**
 * Problem 2: Understanding `this` Context
 *
 * Implement an object `calculator` with methods `add` and `subtract` that correctly use the `this` keyword
 * to update and return a `value` property.
 *
 * @returns {object} - The calculator object.
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
export function createCalculato(){
    // Implement here
      let total=0;
         function add(a){
           total=total+a
           return total;
         }
         function subtract(b){
            total=total-b;
            return total;
         }
         return {
            add,
            subtract
         }
    } 

