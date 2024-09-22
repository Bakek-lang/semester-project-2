import { handleError } from "../../errorhandling/errorMessages/handleError.js";
import { validateEmail } from "../../errorhandling/validate/validateEmail.js";
import { validateName } from "../../errorhandling/validate/validateName.js";
import { validatePassword } from "../../errorhandling/validate/validatePassword.js";
import { registerUser } from "./registerFetch.js";
/**
 * Handles user registration by validating the form inputs and sending a registration request.
 *
 * This function attaches a submit event listener to the registration form. It validates the username, email, and password inputs,
 * displays error messages if validation fails, and sends a registration request to the API if the inputs are valid.
 *
 * @async
 * @function registerAuth
 *
 * @returns {void} This function does not return a value, but it triggers the registration process if validation succeeds.
 *
 * @description
 * - The function listens for the form submission.
 * - It validates the username to ensure it only contains letters, numbers, and underscores.
 * - It validates the email to ensure it belongs to a "stud.noroff.no" domain.
 * - It validates the password to ensure it is at least 8 characters long.
 * - If any validation fails, appropriate error messages are displayed.
 * - If all validations pass, the `registerUser` function is called to register the user.
 *
 * @example
 * registerAuth(); // Initializes registration form validation and submission handling
 */
export async function registerAuth() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    let hasError = false;

    const isNameValid = validateName(username);
    handleError(
      isNameValid,
      "name-error",
      "Name can only contain letters, numbers and underscores."
    );
    if (!isNameValid) {
      hasError = true;
    }

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
      await registerUser(username, email, password);
    }
  });
}
