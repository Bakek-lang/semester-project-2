import { searchListings } from "../data/API/searchResults";
import { showError } from "../errorhandling/errorMessages/showError";

export function startSearchBar() {
  const searchForm = document.getElementById("search-form");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const inputFieldValue = document
      .getElementById("search-field")
      .value.trim();

    if (!inputFieldValue) {
      return;
    }

    await searchListings(inputFieldValue);
  });
}
