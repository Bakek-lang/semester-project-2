import { validateEmail } from "../../errorhandling/validate/validateEmail.js";
import { registerUser } from "./registerFetch.js";

export async function registerAuth() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!validateEmail(email)) {
      console.log("Not a stud.noroff.no mail");
      return;
    }

    await registerUser(username, email, password);
  });
}
