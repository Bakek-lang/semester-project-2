import { load } from "./load";

/**
 * Checks if the user is logged in by verifying the presence of an access token.
 *
 * This function checks if there is a valid access token stored in localStorage. If the token is present, the user is considered logged in.
 *
 * @function isLoggedIn
 *
 * @returns {boolean} Returns `true` if the access token exists in localStorage, otherwise `false`.
 *
 * @description
 * - The function retrieves the "accessToken" from localStorage using the `load` function.
 * - If the token is present, the function returns `true` (indicating the user is logged in).
 * - If the token is `null`, the function returns `false` (indicating the user is not logged in).
 *
 * @example
 * const loggedIn = isLoggedIn();
 * console.log(loggedIn); // Outputs: true if the user is logged in, otherwise false
 */
export function isLoggedIn() {
  return load("accessToken") !== null;
}
