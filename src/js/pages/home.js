import { listings } from "../data/API/getListings";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { modalListeners } from "../eventListeners/modalListeners";
import { createCards } from "../ui/createCard.js";

export function homePage() {
  modalListeners();
  const container = document.querySelector("[data-attribute='container'");
  console.log(listings);
  createCards(listings, container);

  updateUserProfile();
}
