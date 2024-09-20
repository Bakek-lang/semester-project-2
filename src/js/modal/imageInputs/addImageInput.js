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
