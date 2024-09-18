import { profileMenuToggle } from "./src/js/eventListeners/profileMenu.js";
import { isLoggedIn } from "./src/js/localstorage/isLoggedIn.js";
import { handleRoute } from "./src/js/router/router.js";

handleRoute();

if (isLoggedIn()) {
  profileMenuToggle();
}
