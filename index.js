import { listings } from "./src/js/data/API/getListings.js";
import { profileMenuToggle } from "./src/js/eventListeners/profileMenu.js";
import { load } from "./src/js/localstorage/load.js";
import { handleRoute } from "./src/js/router/router.js";
console.log(listings);
const sellerProfile = load("sellerProfile");
console.log(sellerProfile);
handleRoute();
profileMenuToggle();
