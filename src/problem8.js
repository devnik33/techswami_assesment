import { parse } from "path";

/**
 * Problem 8: Deep Object Cloning
 *
 * Implement a function `deepClone` that creates a deep copy of a given object.
 * The function should handle nested objects and arrays.
 *
 * @param {Object} obj - The object to be cloned.
 * @returns {Object} - A deep copy of the object.
 */
export function deepClone(obj) {
    // Implement here
    
      let deepObj=JSON.parse(JSON.stringify(obj));

      return deepObj;
}

deepClone({ a: 1, b: 2 })
