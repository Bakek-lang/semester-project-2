import { registerAuth } from "../data/API/registerAuth";

/**
 * Initializes the registration page by setting up user registration functionality.
 *
 * This function sets up the registration page by calling the `registerAuth` function, which handles form submission and user registration.
 *
 * @async
 * @function registerPage
 *
 * @returns {Promise<void>} A promise that resolves once the registration functionality is set up.
 *
 * @description
 * - Calls the `registerAuth` function to handle the user registration process when the form is submitted.
 *
 * @example
 * registerPage(); // Sets up the registration functionality for the registration page
 */
export async function registerPage() {
  registerAuth();
}
