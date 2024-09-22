import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "./API/constants";
import { load } from "../localstorage/load";

/**
 * Deletes a specific auction listing by its ID.
 *
 * This function sends a DELETE request to the API to remove the specified auction listing. If the deletion is successful, the user is redirected to the homepage. If there is an error during the process, it logs the error message to the console.
 *
 * @async
 * @function deleteListing
 *
 * @param {string} id - The unique identifier of the listing to be deleted.
 *
 * @returns {Promise<void>} A promise that resolves once the listing is deleted and the page is redirected.
 *
 * @throws {Error} Will throw an error if the fetch request fails or the API response is not OK.
 *
 * @description
 * - Sends a DELETE request to the API with the provided listing ID.
 * - If the request is successful, the user is redirected to the homepage.
 * - If the deletion fails, an error message is logged to the console.
 *
 * @example
 * await deleteListing('1234'); // Deletes the listing with ID 1234 and redirects to the homepage
 */
export async function deleteListing(id) {
  const apiEndpoint = API_BASE + API_AUCTION + API_LISTINGS + "/" + id;
  try {
    const response = await fetch(apiEndpoint, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${load("accessToken")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    if (!response.ok) {
      console.error("Could not delete profile");
    }

    window.location.href = "/";
  } catch (error) {
    console.error("Catched error: ", error);
  }
}
