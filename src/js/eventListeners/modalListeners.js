import { isLoggedIn } from "../localstorage/isLoggedIn";
import { closeModal, openModal } from "../modal/modal";

/**
 * Adds event listeners to open and close a modal for creating a listing.
 *
 * This function sets up event listeners on buttons for opening and closing a modal. It checks if the user is logged in before allowing them to open the modal for creating a listing. If the user is not logged in, they are redirected to the login page.
 *
 * @function modalListeners
 *
 * @returns {void} This function does not return a value, but it sets up event listeners for the modal.
 *
 * @description
 * - Adds a click event listener to the "Create Listing" button to check if the user is logged in.
 * - If the user is not logged in, they are redirected to the login page.
 * - If the user is logged in, the modal is opened.
 * - Adds a click event listener to the "Close Modal" button to close the modal when clicked.
 *
 * @example
 * modalListeners(); // Sets up the event listeners for modal open/close actions
 */
export function modalListeners() {
  const createListingButton = document.getElementById("create-listing-button");

  createListingButton.addEventListener("click", () => {
    if (!isLoggedIn()) {
      window.location.href = "/login/";
      return;
    }
    openModal();
  });

  const closeModalButton = document.getElementById("close-modal");

  closeModalButton.addEventListener("click", () => {
    closeModal();
  });
}
