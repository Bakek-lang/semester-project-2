import { loginUser } from "./login.js";

export async function loginAuth() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    await loginUser(email, password);
    window.location.href = "/";
  });
}
