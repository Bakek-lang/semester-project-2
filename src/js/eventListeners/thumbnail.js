/**
 * Handles the functionality of thumbnail image selection for updating the hero image.
 *
 * This function adds click event listeners to all thumbnail images. When a thumbnail is clicked, the hero image is updated to the clicked thumbnail's source. It also updates the styling of the selected thumbnail to indicate it's active.
 *
 * @function handleThumbnails
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by updating the hero image and thumbnail styles.
 *
 * @description
 * - Selects all elements with the class "thumbnail" and the hero image element (`#hero-image`).
 * - Adds a click event listener to each thumbnail to update the hero image's `src` with the thumbnail's `src`.
 * - Removes the "border-black" class from all thumbnails and adds it to the clicked thumbnail to highlight the active image.
 *
 * @example
 * handleThumbnails(); // Initializes thumbnail click listeners and hero image updating
 */
export function handleThumbnails() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const heroImage = document.getElementById("hero-image");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      heroImage.src = this.src;

      thumbnails.forEach((thumb) => thumb.classList.remove("border-black"));
      thumbnails.forEach((thumb) =>
        thumb.classList.remove("border-transparent")
      );

      this.classList.add("border-black");
    });
  });
}
