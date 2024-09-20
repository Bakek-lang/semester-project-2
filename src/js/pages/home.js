import { createListing } from "../data/API/createListing";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { exportListings } from "../data/exportListings";
import { modalListeners } from "../eventListeners/modalListeners";
import { startSearchBar } from "../eventListeners/searchBarListener";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { createCards } from "../ui/createCard.js";
import { updateNavbar } from "../ui/updateNavbar";

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
