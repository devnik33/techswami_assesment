/**
 * Problem 3: Promises and Asynchronous Code
 *
 * Implement a function `fetchData` that simulates an asynchronous API call using a Promise.
 * The function should resolve with "data" after 1 second.
 *
 * @returns {Promise<string>} - A promise that resolves with "data" after 1 second.
 */
export function fetchData() {
    // Implement here

   return new Promise(function(resolve, reject) {

     setTimeout(()=>{
        resolve("data");     
   },1000)

   })

  //  promise.then((response)=>{
  //    console.log(response);
  //  }).catch((err)=>{
  //   console.log(err);
  //  })
}


