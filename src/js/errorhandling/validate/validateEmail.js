/**
 * Validates whether an email address belongs to the "stud.noroff.no" domain.
 *
 * This function checks if the provided email has the correct format and domain by splitting the email at the "@" symbol and ensuring the domain matches "stud.noroff.no".
 *
 * @function validateEmail
 *
 * @param {string} email - The email address to validate.
 *
 * @returns {boolean} Returns `true` if the email is valid and belongs to the "stud.noroff.no" domain, otherwise `false`.
 *
 * @description
 * - Splits the provided email string into two parts using the "@" symbol.
 * - Verifies that the email contains exactly two parts and that the domain matches "stud.noroff.no".
 *
 * @example
 * const isValid = validateEmail('user@stud.noroff.no');
 * console.log(isValid); // Outputs: true
 *
 * const isValid = validateEmail('user@example.com');
 * console.log(isValid); // Outputs: false
 */
export function validateEmail(email) {
  const domain = "stud.noroff.no";
  const emailParts = email.split("@");

  if (emailParts.length === 2 && emailParts[1] === domain) {
    return true;
  } else {
    return false;
  }
}
