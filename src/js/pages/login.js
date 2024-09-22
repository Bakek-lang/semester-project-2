import { loginAuth } from "../data/API/loginAuth.js";

/**
 * Initializes the login page by setting up authentication functionality.
 *
 * This function initializes the login page by calling the `loginAuth` function, which handles the login form submission and authentication process.
 *
 * @async
 * @function loginPage
 *
 * @returns {Promise<void>} A promise that resolves once the login functionality is set up.
 *
 * @description
 * - Calls the `loginAuth` function to handle the authentication process when the login form is submitted.
 *
 * @example
 * loginPage(); // Sets up the login functionality for the login page
 */
export async function loginPage() {
  loginAuth();
}
