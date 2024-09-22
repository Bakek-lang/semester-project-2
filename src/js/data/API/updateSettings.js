import { showError } from "../../errorhandling/errorMessages/showError";
import { load } from "../../localstorage/load";
import { save } from "../../localstorage/save";
import { API_AUCTION, API_BASE, API_KEY, API_PROFILES } from "./constants";

/**
 * Updates the user's profile settings, including the avatar and bio.
 *
 * This function sends a PUT request to the API to update the user's avatar image and bio. If the request is successful, the profile is updated and the page is reloaded. Error handling is included to display relevant error messages in case the update fails.
 *
 * @async
 * @function updateSettings
 *
 * @param {string} imageUrl - The URL of the new avatar image.
 * @param {string} altText - The alt text description for the new avatar image.
 * @param {string} bioText - The new bio text for the user's profile.
 *
 * @returns {Promise<void>} A promise that resolves when the settings are updated and the page is reloaded.
 *
 * @throws {Error} Will throw an error if the fetch request fails or if the API returns an invalid response.
 *
 * @description
 * - Fetches the user's current profile from localStorage.
 * - Constructs the PUT request payload with the provided image URL, alt text, and bio text.
 * - Sends the request to the API to update the user's profile settings.
 * - If the update fails, displays appropriate error messages to the user.
 * - On successful update, stores the updated profile in localStorage and reloads the page.
 *
 * @example
 * await updateSettings('https://example.com/avatar.jpg', 'Profile picture', 'This is my bio');
 */
export async function updateSettings(imageUrl, altText, bioText) {
  const profile = load("profile");
  const name = profile.name;
  const apiEndpoint = API_BASE + API_AUCTION + API_PROFILES + "/" + name;

  const updatedData = {
    bio: bioText || "",
    avatar: {
      url: imageUrl,
      alt: altText || "User Avatar",
    },
  };

  try {
    const response = await fetch(apiEndpoint, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${load("accessToken")}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      console.error("Failed to update profile: ", error);

      const bioInput = document.querySelector("textarea");

      const errorData = await response.json();
      if (errorData && errorData.message) {
        showError(bioInput, errorData.message);
      } else {
        showError(bioInput, "An error occured while updating your profile.");
      }

      return;
    }

    const updatedProfile = await response.json();
    save("personalProfile", updatedProfile.data);

    window.location.reload();
  } catch (error) {
    console.error("Error updating settings: ", error);
    const bioInput = document.querySelector("textarea");
    showError(bioInput, "An error occured while updating your profile");
  }
}
