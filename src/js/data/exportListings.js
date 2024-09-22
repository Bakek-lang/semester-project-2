import { fetchAllListings } from "./API/getListings";

/**
 * Exports all auction listings by fetching them from the API.
 *
 * This function fetches all listings using the `fetchAllListings` function and returns the result. The listings include relevant details such as bids and sellers.
 *
 * @async
 * @function exportListings
 *
 * @returns {Promise<object>} A promise that resolves to the fetched listings object.
 *
 * @throws {Error} Will throw an error if fetching the listings fails.
 *
 * @description
 * - Calls the `fetchAllListings` function to retrieve all auction listings from the API.
 * - Returns the listings data, including bids and sellers.
 *
 * @example
 * const listings = await exportListings();
 * console.log(listings); // Outputs all the fetched listings
 */
export async function exportListings() {
  const listings = await fetchAllListings();
  return listings;
}
