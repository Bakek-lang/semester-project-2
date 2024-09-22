import { handleError } from "../../errorhandling/errorMessages/handleError.js";
import { save } from "../../localstorage/save.js";
import { API_AUTH, API_BASE, API_LOGIN } from "./constants.js";

/**
 * Sends a login request to authenticate the user and store their profile and access token.
 *
 * This function sends a POST request to the API with the user's email and password.
 * If the login is successful, it stores the access token and user profile in localStorage, and redirects to the homepage.
 * If the login fails, an error message is displayed.
 *
 * @async
 * @function loginUser
 *
 * @param {string} email - The email address of the user trying to log in.
 * @param {string} password - The password of the user trying to log in.
 *
 * @returns {Promise<object|void>} A promise that resolves to the user's profile object if login is successful. If the login fails, it returns `void`.
 *
 * @throws {Error} Will throw an error if the fetch request fails for any reason.
 *
 * @description
 * - Sends a POST request to the login API endpoint with the provided email and password.
 * - On successful authentication, it retrieves the access token and user profile from the response.
 * - Stores the access token and profile in localStorage.
 * - Redirects the user to the homepage upon success.
 * - Displays an error message if the email or password is incorrect.
 *
 * @example
 * const profile = await loginUser('user@stud.noroff.no', 'password123');
 * console.log(profile); // Outputs the user's profile if login is successful
 */
export async function loginUser(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    handleError(false, "wrong-information", "Wrong email or password.");
  }

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("accessToken", accessToken);
    save("profile", profile);
    window.location.href = "/";
    return profile;
  }
}
