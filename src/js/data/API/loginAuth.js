import { handleError } from "../../errorhandling/errorMessages/handleError.js";
import { validateEmail } from "../../errorhandling/validate/validateEmail.js";
import { validatePassword } from "../../errorhandling/validate/validatePassword.js";
import { loginUser } from "./loginFetch.js";

/**
 * Handles user login authentication by validating the form inputs and sending a login request.
 *
 * This function attaches a submit event listener to the login form. It validates the email and password inputs,
 * displays error messages if validation fails, and sends a login request to the API if the inputs are valid.
 *
 * @async
 * @function loginAuth
 *
 * @returns {void} This function does not return a value, but it triggers the login process if validation succeeds.
 *
 * @description
 * - The function listens for the form submission.
 * - It validates the email to ensure it belongs to a "stud.noroff.no" domain.
 * - It validates the password to ensure it is at least 8 characters long.
 * - If either validation fails, appropriate error messages are displayed.
 * - If both validations pass, the `loginUser` function is called to authenticate the user.
 *
 * @example
 * loginAuth(); // Initializes login form validation and submission handling
 */
export async function loginAuth() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    let hasError = false;

    const isEmailValid = validateEmail(email);
    handleError(
      isEmailValid,
      "email-error",
      "Please use a 'stud.noroff.no' email address."
    );
    if (!isEmailValid) {
      hasError = true;
    }

    const isPasswordValid = validatePassword(password);
    handleError(
      isPasswordValid,
      "password-error",
      "Password must be at least 8 characters."
    );
    if (!isPasswordValid) {
      hasError = true;
    }

    if (!hasError) {
      await loginUser(email, password);
    }
  });
}
