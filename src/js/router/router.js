import { isLoggedIn } from "../localstorage/isLoggedIn.js";
import { homePage } from "../pages/home.js";
import { loginPage } from "../pages/login.js";
import { postPage } from "../pages/post.js";
import { profilePage } from "../pages/profile.js";
import { registerPage } from "../pages/register.js";
import { settingsPage } from "../pages/settings.js";

/**
 * Handles routing by loading the appropriate page based on the current path.
 *
 * This function checks the current `location.pathname` and loads the corresponding page by calling the relevant function. If the user is not logged in and attempts to access a restricted page (such as "/post/", "/profile/", or "/settings/"), they are redirected to the login page.
 *
 * @function handleRoute
 *
 * @returns {void} This function does not return a value, but it redirects or loads the appropriate page.
 *
 * @description
 * - Checks if the current path is one of the restricted paths ("/post/", "/profile/", or "/settings/").
 * - If the path is restricted and the user is not logged in, the user is redirected to the login page.
 * - Based on the current path, the function calls the appropriate page-loading function (e.g., `homePage`, `registerPage`, `loginPage`, etc.).
 *
 * @example
 * handleRoute(); // Handles routing and loads the appropriate page based on the current path
 */
export function handleRoute() {
  const restrictedPaths = ["/post/", "/profile/", "/settings/"];

  if (restrictedPaths.includes(location.pathname) && !isLoggedIn()) {
    window.location.href = "/login/";
    return;
  }

  switch (location.pathname) {
    case "/":
      homePage();
      break;
    case "/register/":
      registerPage();
      break;
    case "/login/":
      loginPage();
      break;
    case "/post/":
      postPage();
      break;
    case "/profile/":
      profilePage();
      break;
    case "/settings/":
      settingsPage();
      break;
  }
}
