import { updateUserProfile } from "../data/API/updateUserProfile";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { load } from "../localstorage/load";
import { createProfile } from "../ui/createProfile";

/**
 * Initializes the profile page by loading and displaying the seller's profile data.
 *
 * This function loads the seller's profile from localStorage and renders the profile details. If the user is logged in, it also updates the user's own profile information.
 *
 * @function profilePage
 *
 * @returns {void} This function does not return a value, but it renders the seller's profile and updates the user's profile if logged in.
 *
 * @description
 * - Loads the `sellerProfile` from localStorage using the `load` function.
 * - Renders the seller's profile using `createProfile`.
 * - If the user is logged in, their profile information is updated using `updateUserProfile`.
 *
 * @example
 * profilePage(); // Initializes the profile page and renders the seller's profile
 */
export function profilePage() {
  const sellerProfile = load("sellerProfile");

  createProfile(sellerProfile.data[0].seller, sellerProfile);

  if (isLoggedIn()) {
    updateUserProfile();
  }
}
