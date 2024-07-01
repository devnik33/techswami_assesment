/**
 * Problem 9: Function Memoization
 *
 * Implement a function `memoize` that takes another function `fn` as an argument
 * and returns a memoized version of `fn`. The memoized function should cache results
 * of previous calls and return cached results for the same inputs.
 *
 * @param {function} fn - The function to be memoized.
 * @returns {function} - The memoized function.
 */
export function memoize(func) {

    let memoizedKeyValues = [
        /* {
             args: stringified_input_parameters
             result: result
         }*/
     ];
     // Return a function. When we memoized multiply below, we called this function, for each invocation of multiplication
     return (...args) => {
 
         // for the given input (params), check if there is a cached result
         let result = memoizedKeyValues.find( x => x.args === JSON.stringify(args))
 memoizedKeyValues.find(x=>x.args===JSON.stringify(args))
         // YES, there is a cached result
         
         if(result){ 
             
             return result.result; // return cached result
         }
 
         // controls comes to this line only if there is no cached result.

         
         result = func.apply(this,args); // invoke the function
         
         // cache result
         memoizedKeyValues.push({
             args: JSON.stringify(args),
             result: result
         })
    
 
         // return the result
         return result;
     }
}
const add = memoize((p1, p2) => {
    console.log("invoked original function", p1, p2);
    return p1 + p2;
});

//console.log(add(10,30));
// const add=(a,b)=>{
//     console.log(a,b);
//     console.log(a+b);
//     return a+b;
// }

// let output=memoize(add);
// console.log(output(2,5));

