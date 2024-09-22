import { load } from "../../localstorage/load";
import { save } from "../../localstorage/save";
import {
  API_AUCTION,
  API_BASE,
  API_KEY,
  API_LISTINGS,
  API_PROFILES,
} from "./constants";
import { fetchData } from "./fetch";

/**
 * Fetches the auction listings for the currently logged-in user's profile.
 *
 * This function retrieves the listings associated with the logged-in user's profile, including bids and seller details.
 * The listings are then saved to localStorage under the key "profileListings".
 *
 * @async
 * @function getProfileListings
 *
 * @returns {Promise<void>} A promise that resolves when the profile listings are fetched and saved to localStorage.
 *
 * @throws {Error} If there is an issue with fetching the profile listings from the API.
 *
 * @description
 * - The function first retrieves the profile from localStorage.
 * - It then uses the profile name to construct the API endpoint to fetch the user's listings.
 * - The API request includes an authorization token and API key in the headers.
 * - Upon successful fetch, the profile listings are saved to localStorage.
 *
 * @example
 * await getProfileListings();
 * const profileListings = load("profileListings");
 * console.log(profileListings); // Outputs the user's auction listings
 */
export async function getProfileListings() {
  const profile = load("profile");
  const name = profile.name;

  try {
    const profileListings = await fetchData(
      API_BASE +
        API_AUCTION +
        API_PROFILES +
        "/" +
        name +
        API_LISTINGS +
        "?_bids=true&_seller=true",
      {
        headers: {
          Authorization: `Bearer ${load("accessToken")}`,
          "X-Noroff-API-Key": API_KEY,
        },
      }
    );

    save("profileListings", profileListings);
  } catch (error) {
    console.error("Error while fetching profileListings: ", error);
  }
}
