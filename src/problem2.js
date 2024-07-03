/**
 * Problem 2: Understanding `this` Context
 *
 * Implement an object `calculator` with methods `add` and `subtract` that correctly use the `this` keyword
 * to update and return a `value` property.
 *
 * @returns {object} - The calculator object.
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
export function createCalculator() {
let calculator={
    // Implement here
       total:0,
       add(a){
           return this.total=this.total+a

         },
         subtract(b){
           return this.total=this.total-b;

         }

    }
    return calculator;
  }


    
