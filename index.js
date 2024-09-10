import { listings } from "./src/js/data/API/getListings.js";
import { profileMenuToggle } from "./src/js/eventListeners/profileMenu.js";
import { handleRoute } from "./src/js/router/router.js";
console.log(listings);
handleRoute();
profileMenuToggle();
