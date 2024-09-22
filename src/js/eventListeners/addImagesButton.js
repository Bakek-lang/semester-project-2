import { addImageInputField } from "../modal/imageInputs/addImageInput";

/**
 * Adds functionality to an "Add Image" button to dynamically insert image input fields into a container.
 *
 * This function listens for clicks on the provided "Add Image" button and adds new image input fields to the container, up to a maximum limit. Once the maximum number of images is reached, the button is hidden.
 *
 * @function addImagesButton
 *
 * @param {HTMLElement} container - The container element where image input fields will be added.
 * @param {HTMLElement} addButton - The button element that triggers the addition of new image input fields.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by adding input fields and potentially hiding the button.
 *
 * @description
 * - Listens for the "click" event on the add button.
 * - Checks how many image input fields are already in the container.
 * - If fewer than the maximum allowed number of images (`MAX_IMAGES`), a new input field is added using `addImageInputField`.
 * - Hides the add button once the maximum number of image inputs is reached.
 *
 * @example
 * const container = document.getElementById('image-input-container');
 * const addButton = document.getElementById('add-image-button');
 * addImagesButton(container, addButton); // Adds functionality to the "Add Image" button
 */
export function addImagesButton(container, addButton) {
  const MAX_IMAGES = 3;

  addButton.addEventListener("click", () => {
    const inputs = container.querySelectorAll(".mediaUrl");

    if (inputs.length < MAX_IMAGES) {
      addImageInputField(container);
    }

    const updatedInputs = container.querySelectorAll(".mediaUrl");
    if (updatedInputs.length >= MAX_IMAGES) {
      addButton.classList.add("hidden");
    }
  });
}
