import { calculateEndDate } from "../../helpers/calculateEndDate";
import { load } from "../../localstorage/load";
import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "./constants";

export function createListing() {
  const createListingForm = document.getElementById("create-listing-form");

  if (createListingForm) {
    createListingForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const titleValue = document.getElementById("title").value;
      const descriptionValue = document.getElementById("description").value;
      const mediaUrlValue = document.getElementById("mediaUrl").value;
      const mediaAltValue = document.getElementById("mediaAlt").value;
      const durationValue = document.getElementById("duration").value;
      const unitValue = document.getElementById("unit").value;

      const endsAtValue = calculateEndDate(durationValue, unitValue);
      console.log("Ends at: ", endsAtValue);

      const apiEndpoint = API_BASE + API_AUCTION + API_LISTINGS;
      const data = {
        title: titleValue,
        description: descriptionValue,
        media: [
          {
            url: mediaUrlValue,
            alt: mediaAltValue,
          },
        ],
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
        }

        console.log(response);
      } catch (error) {
        console.error("Could not create listing, error: ", error);
      }
    });
  }
}
