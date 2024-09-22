import { searchListings } from "../data/API/searchResults";
/**
 * Initializes the search bar and handles search form submission.
 *
 * This function adds a submit event listener to the search form. When the form is submitted, it prevents the default behavior, retrieves the input value, and triggers a search if the input is not empty.
 *
 * @function startSearchBar
 *
 * @returns {void} This function does not return a value, but it triggers a search based on the input field value.
 *
 * @description
 * - Attaches a submit event listener to the search form (`#search-form`).
 * - Prevents the default form submission behavior.
 * - Retrieves and trims the value from the search input field (`#search-field`).
 * - If the input field is not empty, it triggers a search by calling the `searchListings` function.
 *
 * @example
 * startSearchBar(); // Initializes the search bar functionality
 */
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
