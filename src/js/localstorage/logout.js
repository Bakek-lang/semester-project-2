/**
 * Logs the user out by clearing all data from localStorage and redirecting to the homepage.
 *
 * This function clears all entries in localStorage, effectively logging the user out. After clearing the storage, it redirects the user to the homepage.
 *
 * @function logout
 *
 * @returns {void} This function does not return a value, but it clears localStorage and redirects the user.
 *
 * @description
 * - Clears all data from localStorage using `localStorage.clear()`.
 * - Redirects the user to the homepage (`"/"`).
 *
 * @example
 * logout(); // Clears localStorage and redirects to the homepage
 */
export function logout() {
  localStorage.clear();

  window.location.href = "/";
}
