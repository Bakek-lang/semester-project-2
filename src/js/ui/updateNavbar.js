import { isLoggedIn } from "../localstorage/isLoggedIn";

/**
 * Updates the navigation bar based on the user's login status.
 *
 * This function checks whether the user is logged in and updates the navigation bar accordingly. If the user is not logged in, it replaces the content of the `logged-in-div` with "Log In" and "Register" links.
 *
 * @function updateNavbar
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by updating the navigation bar.
 *
 * @description
 * - Checks if the user is logged in using the `isLoggedIn` function.
 * - If the user is not logged in, the navigation bar is updated to display "Log In" and "Register" links.
 * - The function targets the `logged-in-div` element and modifies its inner HTML content based on the login status.
 *
 * @example
 * updateNavbar(); // Updates the navbar to show Log In and Register links if the user is not logged in
 */
export function updateNavbar() {
  const navbarDiv = document.getElementById("logged-in-div");

  if (!isLoggedIn()) {
    navbarDiv.innerHTML = "";
    navbarDiv.innerHTML = `
    <a href="/login/" class="nav-link mr-8 text-2xl">Log In</a>
    <a href="/register/" class="nav-link text-2xl">Register</a>`;
  }
}
