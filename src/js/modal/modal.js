/**
 * Opens a modal by updating its visibility and preventing body scroll.
 *
 * This function displays a modal by removing the "hidden" class and adding the "flex" class. It also disables body scrolling by adding the "overflow-hidden" class to the `body` element.
 *
 * @function openModal
 *
 * @returns {void} This function does not return a value, but it modifies the DOM to show the modal and prevent body scrolling.
 *
 * @description
 * - Selects the modal element with the ID `modal-overlay`.
 * - Removes the "hidden" class from the modal to make it visible.
 * - Adds the "flex" class to style the modal appropriately.
 * - Adds the "overflow-hidden" class to the `body` element to prevent page scrolling while the modal is open.
 *
 * @example
 * openModal(); // Opens the modal and prevents body scrolling
 */
export function openModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

/**
 * Closes the modal by hiding it and restoring body scroll functionality.
 *
 * This function hides the modal by removing the "flex" class and adding the "hidden" class. It also restores body scrolling by removing the "overflow-hidden" class from the `body` element.
 *
 * @function closeModal
 *
 * @returns {void} This function does not return a value, but it modifies the DOM to hide the modal and restore body scrolling.
 *
 * @description
 * - Selects the modal element with the ID `modal-overlay`.
 * - Removes the "flex" class from the modal to hide it.
 * - Adds the "hidden" class to prevent the modal from displaying.
 * - Removes the "overflow-hidden" class from the `body` element to restore page scrolling.
 *
 * @example
 * closeModal(); // Closes the modal and restores body scrolling
 */
export function closeModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}
