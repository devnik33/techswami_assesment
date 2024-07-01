/**
 * Problem 10: Flattening a Deeply Nested Array
 *
 * Implement a function `flattenArray` that takes a deeply nested array
 * and returns a flattened array.
 *
 * @param {Array} arr - The deeply nested array.
 * @returns {Array} - The flattened array.
 */
export function flattenArray(arr) {
    // Implement here
   let flattarray=[];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
           flattarray=flattarray.concat(flattenArray(arr[i]));
           console.log(flattarray,'issarray');
        }else{
            flattarray.push(arr[i]);
        }
    }
    return flattarray;
}
console.log(flattenArray([[[[1]], [2]], [[[3]], 4]]));