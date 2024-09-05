import { registerUser } from "./register.js";

export async function registerAuth() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(username, email, password);

    await registerUser(username, email, password);
  });
}
