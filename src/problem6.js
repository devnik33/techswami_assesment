/**
 * Problem 6: `setTimeout` and Event Loop
 *
 * Implement a function `delayedSum` that takes two arguments `a` and `b`,
 * and returns a promise that resolves with their sum after 500ms.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {Promise<number>} - A promise that resolves with the sum after 500ms.
 */
export async function delayedSum(a,b) {
    // Implement here
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(a+b)
        },500)
    })



  
}
//await delayedSum(3,5);



