import { homePage } from "../pages/home.js";
import { loginPage } from "../pages/login.js";
import { postPage } from "../pages/post.js";
import { profilePage } from "../pages/profile.js";
import { registerPage } from "../pages/register.js";
import { settingsPage } from "../pages/settings.js";

export function handleRoute() {
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
