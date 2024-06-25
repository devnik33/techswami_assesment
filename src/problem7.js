/**
 * Problem 7: `setInterval`
 *
 * Implement a function `startCounter` that takes a callback and a delay as arguments,
 * and invokes the callback with an incrementing counter every `delay` milliseconds.
 * The counter should start from 1. Provide a way to stop the counter.
 *
 * @param {function} callback - The callback function.
 * @param {number} delay - The interval delay in milliseconds.
 * @returns {object} - An object with a `stop` method to stop the counter.
 */
function startCounter(callback, delay) {
    // Implement here
     let count=0;
    return callback(setInterval(()=>{
        count++
    },delay))
}
let count=0;
const increment = (num) => { count = num; };
        const counter = startCounter(increment, 100);