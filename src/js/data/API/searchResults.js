import { displaySearchResults } from "../../display/displaySearchResults";
import { sortListingsByExpiration } from "../../helpers/sortListings";
import { API_AUCTION, API_BASE, API_LISTINGS } from "./constants";
import { fetchData } from "./fetch";

/**
 * Searches auction listings based on a query and returns filtered and sorted results.
 *
 * This function sends a search query to the API to fetch listings that match the search term. It filters out listings without media and sorts the remaining listings by expiration date before displaying the results.
 *
 * @async
 * @function searchListings
 *
 * @param {string} search - The search term to query the listings.
 *
 * @returns {Promise<object|void>} A promise that resolves to the filtered and sorted listings object, or `void` if an error occurs.
 *
 * @throws {Error} Will throw an error if the fetch request fails or if the API returns an invalid response.
 *
 * @description
 * - Constructs the API endpoint URL with the search query.
 * - Fetches listings that match the search query, including bids and seller details.
 * - Filters out listings without media or valid image URLs.
 * - Sorts the filtered listings by expiration date using `sortListingsByExpiration`.
 * - Displays the search results using `displaySearchResults`.
 *
 * @example
 * const searchResults = await searchListings('laptop');
 * console.log(searchResults); // Outputs the filtered and sorted auction listings for "laptop"
 */
export async function searchListings(search) {
  const apiEndpoint = `${API_BASE}${API_AUCTION}${API_LISTINGS}/search?q=${search}&_bids=true&_seller=true`;

  try {
    const listings = await fetchData(apiEndpoint);

    listings.data = listings.data.filter((listing) => {
      return listing.media && listing.media.length > 0 && listing.media[0].url;
    });

    listings.data = sortListingsByExpiration(listings.data);

    displaySearchResults(listings);
    return listings;
  } catch (error) {
    console.error("Could not fetch search results: ", error);
  }
}
