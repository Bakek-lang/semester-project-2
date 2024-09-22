/**
 * Displays an error message below a specified input element.
 *
 * This function creates a new paragraph element containing the error message and inserts it after the specified input element. The error message is styled with a "text-red-700" class.
 *
 * @function showError
 *
 * @param {HTMLElement} inputElement - The input element after which the error message will be displayed.
 * @param {string} message - The error message to display.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by appending an error message.
 *
 * @description
 * - Creates a new `<p>` element and sets its content to the provided error message.
 * - Adds the "text-red-700" class to the error message to apply styling.
 * - Inserts the error message immediately after the specified input element in the DOM.
 *
 * @example
 * const input = document.getElementById('email');
 * showError(input, 'Invalid email address');
 * // Displays the error message below the email input field
 */
export function showError(inputElement, message) {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("text-red-700");
  errorMessage.textContent = message;
  inputElement.after(errorMessage);
}
