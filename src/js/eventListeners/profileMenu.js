/**
 * Toggles the visibility of the profile menu dropdown when the menu button is clicked.
 *
 * This function adds a click event listener to the profile menu button. When clicked, it toggles the "hidden" class on the profile dropdown menu, showing or hiding it.
 *
 * @function profileMenuToggle
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by toggling the visibility of the profile dropdown.
 *
 * @description
 * - Attaches a click event listener to the menu button (`[data-dropdown-toggle='profile-dropdown']`).
 * - Toggles the "hidden" class on the profile dropdown menu to show or hide it.
 *
 * @example
 * profileMenuToggle(); // Sets up the toggle functionality for the profile dropdown menu
 */
export function profileMenuToggle() {
  const menuButton = document.querySelector(
    "[data-dropdown-toggle='profile-dropdown']"
  );
  const menu = document.getElementById("profile-dropdown");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
}
