export function handleThumbnails() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const heroImage = document.getElementById("hero-image");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      heroImage.src = this.src;

      thumbnails.forEach((thumb) => thumb.classList.remove("border-blue-900"));
      thumbnails.forEach((thumb) =>
        thumb.classList.remove("border-transparent")
      );

      this.classList.add("border-blue-900");
    });
  });
}
