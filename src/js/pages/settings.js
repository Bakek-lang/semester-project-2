import { getProfileListings } from "../data/API/getProfileListings";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { load } from "../localstorage/load";
import { createProfile } from "../ui/createProfile";

/**
 * Initializes the settings page by loading the user's profile and listings, and rendering the profile information.
 *
 * This function loads the user's profile and their listings, then renders the profile details. If the user is logged in, their profile information is updated as well.
 *
 * @async
 * @function settingsPage
 *
 * @returns {Promise<void>} A promise that resolves once the profile and listings are loaded and rendered.
 *
 * @description
 * - Fetches the user's profile listings by calling `getProfileListings`.
 * - Loads the user's profile and profile listings from localStorage.
 * - Renders the user's profile and listings using `createProfile`.
 * - If the user is logged in, their profile information is updated using `updateUserProfile`.
 *
 * @example
 * settingsPage(); // Initializes the settings page, loads user profile and listings, and renders them
 */
export async function settingsPage() {
  await getProfileListings();

  const profileListings = load("profileListings");
  const profile = load("personalProfile");

  createProfile(profile, profileListings);

  if (isLoggedIn()) {
    updateUserProfile();
  }
}
