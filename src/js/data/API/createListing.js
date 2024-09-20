import { clearErrors } from "../../errorhandling/errorMessages/clearErrors";
import { showError } from "../../errorhandling/errorMessages/showError";
import { addImagesButton } from "../../eventListeners/addImagesButton";
import { calculateEndDate } from "../../helpers/calculateEndDate";
import { load } from "../../localstorage/load";
import { addImageInputField } from "../../modal/imageInputs/addImageInput";
import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "./constants";

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
      console.log("Ends at: ", endsAtValue);

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

      console.log("data: ", data, "apiendpoint:", apiEndpoint);

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
          console.error("Failed to create listing: ", error);
          showError(
            document.getElementById("listing-error"),
            "An error occured while creating the post"
          );
        }

        console.log(response);

        window.location.href = "/";
      } catch (error) {
        console.error("Could not create listing, error: ", error);
        showError(
          document.getElementById("listing-error"),
          "An error occured while creating the post"
        );
      }
    });
  }
}
