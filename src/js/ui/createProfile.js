import { updateSettings } from "../data/API/updateSettings";
import { clearErrors } from "../errorhandling/errorMessages/clearErrors";
import { showError } from "../errorhandling/errorMessages/showError";
import { load } from "../localstorage/load";
import { createCards } from "./createCard";

export function createProfile(profile, listings) {
  // for the if statement
  const profileStorage = load("personalProfile");
  const profileStorageName = profileStorage.name;

  const main = document.querySelector("main");
  main.innerHTML = "";

  const containerDiv = document.createElement("div");
  containerDiv.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "min-h-screen",
    "p-4",
    "max-w-screen-xl",
    "mx-auto"
  );

  const cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "bg-white",
    "rounded-lg",
    "shadow-lg",
    "p-4",
    "max-w-sm",
    "w-full",
    "text-center"
  );

  const img = document.createElement("img");
  img.classList.add("w-24", "h-24", "rounded-full", "mx-auto", "object-cover");
  img.src = profile.avatar.url;
  img.alt = profile.avatar.alt;

  const h1 = document.createElement("h1");
  h1.classList.add("text-2xl", "font-semibold", "mt-4");
  h1.textContent = profile.name;

  const bio = document.createElement("p");
  bio.classList.add("mt-4");
  bio.textContent = profile.bio || "This user has not made a bio yet.";

  if (profile.name === profileStorageName) {
    const form = document.createElement("form");
    form.classList.add("flex", "flex-col");
    form.onsubmit = (event) => {
      event.preventDefault();

      const imageUrl = imageInput.value;
      const imageAlt = imageAltInput.value;
      const bioText = bioInput.value;

      let isValid = true;

      clearErrors();

      if (!imageUrl) {
        showError(imageInput, "Please enter a valid image URL");
        isValid = false;
      }

      if (!imageAlt) {
        showError(
          imageAltInput,
          "Please enter a short description for the image"
        );
        isValid = false;
      }

      if (!bioText) {
        showError(bioInput, "Bio cannot be empty.");
        isValid = false;
      }

      if (isValid) {
        updateSettings(imageUrl, imageAlt, bioText);
      }
      // update img and bio
      console.log("Image URL:", imageUrl);
      console.log("Bio:", bioText);
    };

    const imageUploadContainer = document.createElement("div");
    imageUploadContainer.classList.add("flex", "flex-col", "mt-2");

    const imageInput = document.createElement("input");
    imageInput.type = "text";
    imageInput.placeholder = "Enter image URL";
    imageInput.classList.add(
      "border",
      "border-gray-400",
      "rounded",
      "px-4",
      "py-2",
      "w-full"
    );

    imageUploadContainer.append(imageInput);

    const imageAltContainer = document.createElement("div");
    imageAltContainer.classList.add("flex", "flex-col", "mt-2");

    const imageAltInput = document.createElement("input");
    imageAltInput.type = "text";
    imageAltInput.placeholder = "Enter short description of image";
    imageAltInput.classList.add(
      "border",
      "border-gray-400",
      "rounded",
      "px-4",
      "py-2",
      "w-full"
    );

    imageAltContainer.append(imageAltInput);

    const bioContainer = document.createElement("div");
    bioContainer.classList.add("flex", "flex-col", "mt-2");

    const bioInput = document.createElement("textarea");
    bioInput.placeholder = "Enter your bio";
    bioInput.classList.add(
      "border",
      "border-gray-400",
      "rounded",
      "px-4",
      "py-2",
      "w-full"
    );

    bioContainer.append(bioInput);

    const updateButton = document.createElement("button");
    updateButton.type = "submit";
    updateButton.textContent = "Update";
    updateButton.classList.add(
      "bg-blue-600",
      "text-white",
      "px-4",
      "py-2",
      "rounded",
      "mt-2"
    );

    form.append(
      imageUploadContainer,
      imageAltContainer,
      bioContainer,
      updateButton
    );
    cardDiv.append(img, h1, bio, form);
  } else {
    cardDiv.append(img, h1, bio);
  }

  const listingHeadingDiv = document.createElement("div");
  listingHeadingDiv.classList.add("mt-4", "w-full");

  const listingsHeading = document.createElement("h2");
  listingsHeading.classList.add(
    "text-3xl",
    "font-bold",
    "mb-2",
    "mt-2",
    "text-left"
  );
  listingsHeading.textContent = "Listings:";

  listingHeadingDiv.append(listingsHeading);

  const listingsContainer = document.createElement("div");
  listingsContainer.classList.add(
    "mt-4",
    "w-full",
    "flex",
    "flex-wrap",
    "justify-center",
    "xl:justify-between",
    "max-w-screen-xl",
    "mx-auto",
    "gap-4"
  );

  if (!listings || listings.data.length === 0) {
    const defaultMessageListings = document.createElement("span");
    defaultMessageListings.textContent = "No listings yet.";

    listingsContainer.append(defaultMessageListings);
  }

  containerDiv.append(cardDiv, listingHeadingDiv, listingsContainer);

  main.append(containerDiv);

  createCards(listings, listingsContainer);
}
