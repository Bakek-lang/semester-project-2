/**
 * Displays or hides an error message based on the validation result.
 *
 * This function updates the specified error div with a message if the validation fails, or hides the error div if validation passes.
 *
 * @function handleError
 *
 * @param {boolean} isValid - A boolean indicating whether the validation passed (`true`) or failed (`false`).
 * @param {string} errorDivId - The ID of the div where the error message will be displayed.
 * @param {string} message - The error message to display if the validation fails.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by showing or hiding error messages.
 *
 * @description
 * - If `isValid` is `false`, the function sets the text content of the error div to the provided message and removes the "hidden" class to display it.
 * - If `isValid` is `true`, the function adds the "hidden" class to hide the error div.
 *
 * @example
 * handleError(false, 'email-error', 'Invalid email address');
 * // Displays the error message in the div with the ID 'email-error'
 *
 * handleError(true, 'email-error', '');
 * // Hides the error message in the div with the ID 'email-error'
 */
export function handleError(isValid, errorDivId, message) {
  const errorDiv = document.getElementById(errorDivId);
  if (!isValid) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
  } else {
    errorDiv.classList.add("hidden");
  }
}
