import { createListing } from "../data/API/createListing";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { exportListings } from "../data/exportListings";
import { modalListeners } from "../eventListeners/modalListeners";
import { startSearchBar } from "../eventListeners/searchBarListener";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { createCards } from "../ui/createCard.js";
import { updateNavbar } from "../ui/updateNavbar";

/**
 * Initializes the home page by fetching listings, setting up event listeners, and updating the UI.
 *
 * This function loads the homepage by fetching the auction listings, setting up modals, creating listing cards, enabling search functionality, and updating the navigation bar. If the user is logged in, their profile information is also updated.
 *
 * @async
 * @function homePage
 *
 * @returns {Promise<void>} A promise that resolves once the homepage is fully initialized.
 *
 * @description
 * - Fetches all auction listings using `exportListings`.
 * - Initializes event listeners for the modal and listing creation form.
 * - Renders listing cards in the container using `createCards`.
 * - Sets up the search bar functionality with `startSearchBar`.
 * - Updates the navigation bar with `updateNavbar`.
 * - If the user is logged in, it updates the user's profile with `updateUserProfile`.
 *
 * @example
 * homePage(); // Initializes the homepage with listings, event listeners, and UI updates
 */
export async function homePage() {
  const listings = await exportListings();
  modalListeners();
  createListing();
  const container = document.querySelector("[data-attribute='container'");
  createCards(listings, container);
  startSearchBar();
  updateNavbar();

  if (isLoggedIn()) {
    updateUserProfile();
  }
}
