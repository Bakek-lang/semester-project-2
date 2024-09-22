/**
 * Shortens a description to a maximum of 35 characters, adding an ellipsis if necessary.
 *
 * This function checks if the provided description exceeds 35 characters. If it does, the description is truncated to 35 characters and an ellipsis ("...") is appended. Otherwise, the original description is returned unchanged.
 *
 * @function shortenDescription
 *
 * @param {string} description - The description text to potentially shorten.
 *
 * @returns {string} The shortened description if it exceeds 35 characters, otherwise the original description.
 *
 * @description
 * - If the description length is greater than 35 characters, it truncates the string and appends an ellipsis.
 * - If the description length is 35 characters or less, the original description is returned.
 *
 * @example
 * const shortDesc = shortenDescription('This is a very long description that needs to be shortened.');
 * console.log(shortDesc); // Outputs: "This is a very long description..."
 *
 * const shortDesc = shortenDescription('Short description');
 * console.log(shortDesc); // Outputs: "Short description"
 */
export function shortenDescription(description) {
  if (description.length > 35) {
    return description.substring(0, 35) + "...";
  }
  return description;
}
