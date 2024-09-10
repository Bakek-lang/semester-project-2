import { listings } from "../data/API/getListings";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { createCards } from "../ui/createCard.js";

export function homePage() {
  const container = document.querySelector("[data-attribute='container'");
  console.log(listings);
  createCards(listings, container);

  updateUserProfile();
}
