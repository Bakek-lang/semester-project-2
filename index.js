import { listings } from "./src/js/data/API/getListings.js";
import { hamburgerMenuToggle } from "./src/js/eventListeners/hamburgerMenu.js";
import { handleRoute } from "./src/js/router/router.js";
console.log(listings);
handleRoute();
hamburgerMenuToggle();
