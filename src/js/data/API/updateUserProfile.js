import { load } from "../../localstorage/load";
import { logout } from "../../localstorage/logout";
import { save } from "../../localstorage/save";
import { renderUserMenu } from "../../ui/renderUserMenu";
import { API_AUCTION, API_BASE, API_KEY, API_PROFILES } from "./constants";
import { fetchData } from "./fetch";

/**
 * Fetches and updates the user's profile information, then updates the user menu with the new data.
 *
 * This function retrieves the latest profile data from the API and saves it in localStorage. It then renders the updated user menu with the fetched profile data. Additionally, it sets up an event listener for the logout button, which triggers the logout process when clicked.
 *
 * @async
 * @function updateUserProfile
 *
 * @returns {Promise<void>} A promise that resolves once the profile has been updated and the user menu is rendered.
 *
 * @throws {Error} Will throw an error if the fetch request fails.
 *
 * @description
 * - Fetches the user's profile from the API using the stored username.
 * - Updates localStorage with the new profile data.
 * - Renders the user menu with the updated profile information.
 * - Adds an event listener to the logout button to handle user logout.
 *
 * @example
 * await updateUserProfile(); // Updates profile and renders user menu
 */
export async function updateUserProfile() {
  const profile = load("profile");
  const name = profile.name;
  try {
    const profile = await fetchData(
      API_BASE + API_AUCTION + API_PROFILES + "/" + name,
      {
        headers: {
          Authorization: `Bearer ${load("accessToken")}`,
          "X-Noroff-API-Key": API_KEY,
        },
      }
    );
    save("personalProfile", profile.data);
    renderUserMenu(profile.data);
  } catch (error) {
    console.error("Error: ", error);
  }

  const logoutButton = document.getElementById("logout-btn");

  if (logoutButton) {
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault();
      logout();
    });
  }
}
