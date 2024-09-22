import { sortListingsByExpiration } from "../../helpers/sortListings.js";
import { API_AUCTION, API_BASE, API_LISTINGS } from "./constants.js";
import { fetchData } from "./fetch.js";

/**
 * Fetches all auction listings from the API, including bids and seller details, and filters out listings without media.
 *
 * This function retrieves auction listings from multiple pages by sending multiple fetch requests.
 * It filters out listings that do not have valid media (image URLs) and sorts the remaining listings by expiration date.
 *
 * @async
 * @function fetchAllListings
 *
 * @returns {Promise<{data: object[]}>} A promise that resolves to an object containing an array of sorted listings.
 * The listings are filtered to include only those with valid media (image URLs) and sorted by expiration date.
 *
 * @throws {Error} If any fetch request fails or an invalid response is returned from the API.
 *
 * @description
 * - The function fetches listings 100 at a time, starting with the first page.
 * - It continues to fetch listings from subsequent pages until all pages are processed.
 * - Listings without media or valid image URLs are filtered out.
 * - The valid listings are then sorted by their expiration date in descending order.
 *
 * @example
 * const { data } = await fetchAllListings();
 * console.log(data); // Outputs an array of valid and sorted auction listings
 */

export async function fetchAllListings() {
  let allListings = [];
  let currentPage = 1;
  let totalPageCount = 1;
  const LIMIT = 100;

  const firstResponse = await fetchData(
    `${API_BASE}${API_AUCTION}${API_LISTINGS}?_bids=true&_seller=true&page=${currentPage}&limit=${LIMIT}`
  );

  const validFirstListings = firstResponse.data.filter((listing) => {
    return listing.media && listing.media.length > 0 && listing.media[0].url;
  });

  allListings = allListings.concat(validFirstListings);
  totalPageCount = firstResponse.meta.pageCount;

  while (currentPage < totalPageCount) {
    currentPage++;
    const nextResponse = await fetchData(
      `${API_BASE}${API_AUCTION}${API_LISTINGS}?_bids=true&_seller=true&page=${currentPage}&limit=${LIMIT}`
    );

    const validNextListings = nextResponse.data.filter((listing) => {
      return listing.media && listing.media.length > 0 && listing.media[0].url;
    });

    allListings = allListings.concat(validNextListings);
  }

  const sortedListings = sortListingsByExpiration(allListings);

  return { data: sortedListings };
}
