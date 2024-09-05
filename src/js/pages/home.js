import { listings } from "../data/API/getListings";
import { createCards } from "../ui/createCard.js";

export function homePage() {
  createCards(listings);
}
