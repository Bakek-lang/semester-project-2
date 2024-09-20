import { addImageInputField } from "../modal/imageInputs/addImageInput";

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
