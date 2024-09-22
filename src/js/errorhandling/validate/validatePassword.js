/**
 * Validates a password to ensure it is at least 8 characters long.
 *
 * This function checks if the provided password meets the minimum length requirement of 8 characters.
 *
 * @function validatePassword
 *
 * @param {string} password - The password to validate.
 *
 * @returns {boolean} Returns `true` if the password is 8 characters or longer, otherwise `false`.
 *
 * @example
 * const isValid = validatePassword('mypassword');
 * console.log(isValid); // Outputs: true
 *
 * const isValid = validatePassword('pass');
 * console.log(isValid); // Outputs: false
 */
export function validatePassword(password) {
  return password.length >= 8;
}
