/**
 * Loads and parses data from localStorage by a given key.
 *
 * This function retrieves a value from localStorage using the provided key, parses it as JSON, and returns the result.
 *
 * @function load
 *
 * @param {string} key - The key used to retrieve the value from localStorage.
 *
 * @returns {any} The parsed JSON value associated with the provided key, or `null` if the key does not exist.
 *
 * @description
 * - The function accesses localStorage and retrieves the value associated with the provided `key`.
 * - The retrieved value is parsed from JSON and returned.
 * - If the key does not exist in localStorage, `null` is returned.
 *
 * @example
 * const profile = load('profile');
 * console.log(profile); // Outputs the parsed profile object from localStorage, or null if it doesn't exist
 */
export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}
