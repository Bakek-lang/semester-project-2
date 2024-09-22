/**
 * Saves a key-value pair to localStorage after stringifying the value.
 *
 * This function takes a key and a value, converts the value to a JSON string, and stores it in localStorage under the specified key.
 *
 * @function save
 *
 * @param {string} key - The key under which the value will be saved in localStorage.
 * @param {any} value - The value to be saved in localStorage. This value will be stringified before saving.
 *
 * @returns {void} This function does not return a value, but it stores the key-value pair in localStorage.
 *
 * @description
 * - Converts the `value` to a JSON string using `JSON.stringify`.
 * - Stores the stringified value in localStorage under the provided `key`.
 *
 * @example
 * const profile = { name: "John", age: 30 };
 * save('profile', profile); // Saves the profile object in localStorage under the 'profile' key
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
