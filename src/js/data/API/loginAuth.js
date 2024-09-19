import { handleError } from "../../errorhandling/errorMessages/handleError.js";
import { validateEmail } from "../../errorhandling/validate/validateEmail.js";
import { validatePassword } from "../../errorhandling/validate/validatePassword.js";
import { loginUser } from "./loginFetch.js";

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
