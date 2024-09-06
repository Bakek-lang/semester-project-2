import { listings } from "./src/js/data/API/getListings.js";
import { handleRoute } from "./src/js/router/router.js";
import { findCorrectListing } from "./src/js/ui/findListing.js";

handleRoute();
findCorrectListing(listings.data);
