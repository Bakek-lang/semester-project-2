import { listings } from "../data/API/getListings";
import { createCards } from "../ui/createCard.js";

export function homePage() {
  const container = document.querySelector("[data-attribute='container'");
  console.log(listings);
  createCards(listings, container);
}
