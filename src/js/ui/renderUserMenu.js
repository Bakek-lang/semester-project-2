/**
 * Updates the user menu with the provided profile information.
 *
 * This function updates the user menu by inserting the profile image, name, email, credits, and the number of wins into the corresponding elements on the page. The data is sourced from the provided `profile` object.
 *
 * @function renderUserMenu
 *
 * @param {object} profile - The user profile object containing the avatar, name, email, credits, and wins information.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by updating the user menu with profile information.
 *
 * @description
 * - Updates the user's avatar image and alt text.
 * - Updates the user's name, email, available credits, and number of auction wins.
 * - The function looks for elements in the DOM with `data-profile` attributes to insert the respective profile information.
 *
 * @example
 * const profile = {
 *   name: "JohnDoe",
 *   email: "johndoe@example.com",
 *   avatar: { url: "avatar-url", alt: "User avatar" },
 *   credits: 500,
 *   _count: { wins: 10 }
 * };
 * renderUserMenu(profile); // Updates the user menu with profile information
 */
export function renderUserMenu(profile) {
  const profileImage = document.querySelector("[data-profile='user-image']");

  profileImage.src = profile.avatar.url;
  profileImage.alt = profile.avatar.alt;

  const profileName = document.querySelector("[data-profile='user-name']");

  profileName.textContent = profile.name;

  const profileEmail = document.querySelector("[data-profile='user-email']");

  profileEmail.textContent = profile.email;

  const profileCredits = document.querySelector(
    "[data-profile='user-credits']"
  );

  profileCredits.textContent = profile.credits;

  const profileWins = document.querySelector("[data-profile='user-wins']");

  profileWins.textContent = profile._count.wins;
}
