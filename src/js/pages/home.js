import { createListing } from "../data/API/createListing";
import { listings } from "../data/API/getListings";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { modalListeners } from "../eventListeners/modalListeners";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { createCards } from "../ui/createCard.js";

export function homePage() {
  modalListeners();
  createListing();
  const container = document.querySelector("[data-attribute='container'");
  createCards(listings, container);

  if (isLoggedIn()) {
    updateUserProfile();
  }
}
