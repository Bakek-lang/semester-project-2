import { createCards } from "../ui/createCard";

/**
 * Displays search results by rendering listing cards in the designated container.
 *
 * This function clears the existing content in the container and displays the search results. If no listings are found, it shows a message indicating that there are no results. If listings are found, it calls the `createCards` function to render them in the container.
 *
 * @function displaySearchResults
 *
 * @param {object} listings - The search results object containing the listings data to be displayed.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM to display the listings or a "no results" message.
 *
 * @description
 * - Clears the container that holds the listings.
 * - Checks if the `listings.data` array is empty.
 * - If no listings are found, displays a "No listings found" message.
 * - If listings are found, calls `createCards` to render the listings in the container.
 *
 * @example
 * const listings = { data: [{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }] };
 * displaySearchResults(listings); // Renders the search results or a "no listings found" message
 */
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
