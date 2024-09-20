import { isLoggedIn } from "../localstorage/isLoggedIn";

export function updateNavbar() {
  const navbarDiv = document.getElementById("logged-in-div");

  if (!isLoggedIn()) {
    navbarDiv.innerHTML = "";
    navbarDiv.innerHTML = `
    <a href="/login/" class="nav-link mr-8 text-2xl">Log In</a>
    <a href="/register/" class="nav-link text-2xl">Register</a>`;
  }
}
