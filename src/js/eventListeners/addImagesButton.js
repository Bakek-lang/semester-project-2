import { addImageInputField } from "../modal/imageInputs/addImageInput";

export function addImagesButton(container, addButton) {
  const MAX_IMAGES = 3;

  addButton.addEventListener("click", () => {
    const inputs = container.querySelectorAll(".image-url-input");

    if (inputs.length < MAX_IMAGES) {
      addImageInputField(container);
    } else {
      addButton.classList.add("hidden");
    }
  });
}
