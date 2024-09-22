/**
 * Removes all error messages from the DOM.
 *
 * This function selects all elements with the class "text-red-700", which are error messages, and removes them from the DOM.
 *
 * @function clearErrors
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by removing error message elements.
 *
 * @description
 * - Selects all elements with the class "text-red-700" (error messages).
 * - Iterates over the selected elements and removes each one from the DOM.
 *
 * @example
 * clearErrors(); // Removes all error messages from the page
 */
export function clearErrors() {
  const errorMessages = document.querySelectorAll(".text-red-700");
  errorMessages.forEach((error) => error.remove());
}
