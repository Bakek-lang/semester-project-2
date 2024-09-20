import { createCards } from "../ui/createCard";

export function displaySearchResults(listings) {
  const container = document.querySelector("[data-attribute='container']");
  container.innerHTML = "";

  if (listings.data.length === 0) {
    container.innerHTML =
      "<p class='text-center'>No listings found for your search.</p>";
    return;
  }

  createCards(listings, container);
}
