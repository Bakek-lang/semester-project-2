/**
 * Dynamically adds an image URL and description input field to a specified container.
 *
 * This function creates a new set of input fields for adding an image URL and its description. The inputs are wrapped in a container and appended to the provided parent container.
 *
 * @function addImageInputField
 *
 * @param {HTMLElement} container - The parent container element where the image input fields will be appended.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by appending new input fields to the specified container.
 *
 * @description
 * - Creates a `div` element to wrap the image URL and description input fields.
 * - Adds an `input` element for the image URL, with appropriate label and styling.
 * - Adds an `input` element for the image description, with appropriate label and styling.
 * - Appends the newly created input fields to the provided container.
 *
 * @example
 * const container = document.getElementById('image-input-container');
 * addImageInputField(container); // Adds an image input field and description to the container
 */
export function addImageInputField(container) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("mb-4", "w-full");

  const urlLabel = document.createElement("label");
  urlLabel.setAttribute("for", "mediaUrl");
  urlLabel.classList.add("text-sm", "font-medium", "text-gray-700");
  urlLabel.innerHTML = 'Image URL <span class="text-red-500">*</span>';

  const urlInput = document.createElement("input");
  urlInput.setAttribute("type", "url");
  urlInput.classList.add(
    "border",
    "border-gray-400",
    "rounded",
    "px-4",
    "py-2",
    "w-full"
  );
  urlInput.classList.add("mediaUrl");

  const altLabel = document.createElement("label");
  altLabel.setAttribute("for", "mediaAlt");
  altLabel.classList.add("text-sm", "font-medium", "text-gray-700");
  altLabel.innerHTML = 'Image description <span class="text-red-500">*</span>';

  const altInput = document.createElement("input");
  altInput.setAttribute("type", "text");
  altInput.classList.add(
    "border",
    "border-gray-400",
    "rounded",
    "px-4",
    "py-2",
    "w-full"
  );
  altInput.classList.add("mediaAlt");

  imageContainer.append(urlLabel, urlInput, altLabel, altInput);

  container.append(imageContainer);
}
