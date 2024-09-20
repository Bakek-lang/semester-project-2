import { createListing } from "../data/API/createListing";
import { listings } from "../data/API/getListings";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { modalListeners } from "../eventListeners/modalListeners";
import { startSearchBar } from "../eventListeners/searchBarListener";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { createCards } from "../ui/createCard.js";
import { updateNavbar } from "../ui/updateNavbar";

export function homePage() {
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
