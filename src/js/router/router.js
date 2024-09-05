import { loginPage } from "../pages/login";
import { registerPage } from "../pages/register";

export function handleRoute() {
  switch (location.pathname) {
    case "/register/":
      registerPage();
    case "/login/":
      loginPage();
  }
}
