import { clearErrors } from "../../errorhandling/errorMessages/clearErrors";
import { showError } from "../../errorhandling/errorMessages/showError";
import { addImagesButton } from "../../eventListeners/addImagesButton";
import { calculateEndDate } from "../../helpers/calculateEndDate";
import { load } from "../../localstorage/load";
import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "./constants";

/**
 * Handles the creation of a new auction listing.
 *
 * The function listens for the submission of a form and validates input fields.
 * If the input is valid, it sends a POST request to the API to create a new auction listing.
 * The listing includes the title, description, media (image URLs and alt text), and the auction's end date.
 *
 * @async
 * @function createListing
 *
 * @returns {void} This function does not return a value, but redirects to the home page on success.
 *
 * @description This function performs the following steps:
 *  1. Attaches an event listener to the listing form submit event.
 *  2. Validates form inputs (title, description, media URLs, alt text, auction duration).
 *  3. Constructs a media array that contains images and their descriptions.
 *  4. Calculates the auction's end date using the provided duration and unit.
 *  5. Sends a POST request to the auction API to create a new listing.
 *  6. Redirects the user to the homepage on success or shows error messages on failure.
 */
export function createListing() {
  const createListingForm = document.getElementById("create-listing-form");

  const imageInputContainer = document.getElementById("image-input-container");
  const addImageButton = document.getElementById("add-image-button");

  addImagesButton(imageInputContainer, addImageButton);

  if (createListingForm) {
    createListingForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const titleValue = document.getElementById("title").value;
      const descriptionValue = document.getElementById("description").value;
      const mediaUrlValue = document.getElementById("mediaUrl").value;
      const mediaAltValue = document.getElementById("mediaAlt").value;
      const durationValue = document.getElementById("duration").value;
      const unitValue = document.getElementById("unit").value;

      let isValid = true;

      clearErrors();

      if (!titleValue) {
        showError(document.getElementById("title"), "Title cannot be empty.");
        isValid = false;
      }
      if (!descriptionValue) {
        showError(
          document.getElementById("description"),
          "Description cannot be empty."
        );
        isValid = false;
      }
      if (!mediaUrlValue) {
        showError(
          document.getElementById("mediaUrl"),
          "Image URL cannot be empty."
        );
        isValid = false;
      }
      if (!mediaAltValue) {
        showError(
          document.getElementById("mediaAlt"),
          "Image Description cannot be empty."
        );
        isValid = false;
      }
      if (!durationValue) {
        showError(
          document.getElementById("duration"),
          "Auction Time cannot be empty."
        );
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      const endsAtValue = calculateEndDate(durationValue, unitValue);

      const mediaArray = [];

      if (mediaUrlValue && mediaAltValue) {
        mediaArray.push({
          url: mediaUrlValue,
          alt: mediaAltValue,
        });
      }

      const dynamicImageUrls = document.querySelectorAll(".mediaUrl");
      const dynamicImageAlts = document.querySelectorAll(".mediaAlt");

      dynamicImageUrls.forEach((urlInput, index) => {
        const urlValue = urlInput.value;
        const altValue = dynamicImageAlts[index].value;

        if (urlValue && altValue) {
          mediaArray.push({
            url: urlValue,
            alt: altValue,
          });
        } else {
          showError(urlInput, "Please enter a valid image URL and description");
          isValid = false;
        }
      });

      if (!isValid) {
        return;
      }

      const apiEndpoint = API_BASE + API_AUCTION + API_LISTINGS;
      const data = {
        title: titleValue,
        description: descriptionValue,
        media: mediaArray,
        endsAt: endsAtValue,
      };

      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${load("accessToken")}`,
            "X-Noroff-API-Key": API_KEY,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          showError(
            document.getElementById("listing-error"),
            "An error occured while creating the post"
          );
        }

        window.location.href = "/";
      } catch (error) {
        showError(
          document.getElementById("listing-error"),
          "An error occured while creating the post"
        );
      }
    });
  }
}
