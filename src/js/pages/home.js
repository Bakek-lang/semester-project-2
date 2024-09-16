import { createListing } from "../data/API/createListing";
import { listings } from "../data/API/getListings";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { modalListeners } from "../eventListeners/modalListeners";
import { createCards } from "../ui/createCard.js";

export function homePage() {
  modalListeners();
  createListing();
  const container = document.querySelector("[data-attribute='container'");
  console.log(listings);
  createCards(listings, container);

  updateUserProfile();
}
