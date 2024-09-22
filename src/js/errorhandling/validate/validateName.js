/**
 * Validates a username to ensure it contains only letters, numbers, and underscores.
 *
 * This function checks if the provided name matches the pattern that allows only alphanumeric characters (letters and numbers) and underscores.
 *
 * @function validateName
 *
 * @param {string} name - The username to validate.
 *
 * @returns {boolean} Returns `true` if the name is valid, otherwise `false`.
 *
 * @description
 * - Uses a regular expression pattern (`/^[a-zA-Z0-9_]+$/`) to validate that the name consists only of letters, numbers, and underscores.
 *
 * @example
 * const isValid = validateName('username_123');
 * console.log(isValid); // Outputs: true
 *
 * const isValid = validateName('invalid name!');
 * console.log(isValid); // Outputs: false
 */
export function validateName(name) {
  const namePattern = /^[a-zA-Z0-9_]+$/;
  return namePattern.test(name);
}
