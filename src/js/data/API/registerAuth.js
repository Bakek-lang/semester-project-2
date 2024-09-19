import { handleError } from "../../errorhandling/errorMessages/handleError.js";
import { validateEmail } from "../../errorhandling/validate/validateEmail.js";
import { validateName } from "../../errorhandling/validate/validateName.js";
import { validatePassword } from "../../errorhandling/validate/validatePassword.js";
import { registerUser } from "./registerFetch.js";

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
