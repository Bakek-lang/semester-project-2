import { API_BASE, API_AUTH, API_REGISTER } from "./constants.js";

/**
 * Sends a registration request to the API to create a new user account.
 *
 * This function sends a POST request to the API with the user's name, email, and password to register a new account.
 * If the registration is successful, the user is redirected to the login page. If there is an error, the response is returned.
 *
 * @async
 * @function registerUser
 *
 * @param {string} name - The username chosen by the user.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password chosen by the user.
 *
 * @returns {Promise<object|void>} A promise that resolves to the error response if registration fails, or `void` if successful.
 *
 * @throws {Error} Will throw an error if the fetch request fails.
 *
 * @description
 * - Sends a POST request to the API's register endpoint with the provided user details.
 * - If the registration is successful, the user is redirected to the login page.
 * - If the registration fails, the error response from the API is returned.
 *
 * @example
 * const result = await registerUser('john_doe', 'john@stud.noroff.no', 'password123');
 * if (result) {
 *   console.error('Registration failed:', result);
 * }
 */
export async function registerUser(name, email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    return response.json();
  }

  window.location.href = "/login/";
}
