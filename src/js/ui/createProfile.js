import { load } from "../localstorage/load";
import { createCards } from "./createCard";

export function createProfile(profile, listings) {
  // for the if statement
  const profileStorage = load("profile");
  const profileStorageName = profileStorage.name;

  const main = document.querySelector("main");
  main.innerHTML = "";

  const containerDiv = document.createElement("div");
  containerDiv.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "min-h-screen",
    "p-4",
    "bg-gray-700"
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
  img.classList.add("w-24", "h-24", "rounded-lg", "mx-auto");
  img.src = profile.avatar.url;
  img.alt = profile.avatar.alt;

  const h1 = document.createElement("h1");
  h1.classList.add("text-2xl", "font-semibold", "mt-4");
  h1.textContent = profile.name;

  const bio = document.createElement("p");
  bio.classList.add("mt-4");
  bio.textContent = profile.bio || "";

  if (profile.name === profileStorageName) {
    const form = document.createElement("form");
    form.classList.add("flex", "flex-col");
    form.onsubmit = (event) => {
      event.preventDefault();

      const imageUrl = imageInput.value;
      const bioText = bioInput.value;

      // update img and bio
      console.log("Image URL:", imageUrl);
      console.log("Bio:", bioText);
    };

    const imageUploadContainer = document.createElement("div");
    imageUploadContainer.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "mt-2"
    );

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

    form.append(imageUploadContainer, bioContainer, updateButton);
    cardDiv.append(img, h1, bio, form);
  } else {
    cardDiv.append(img, h1, bio);
  }

  const listingHeadingDiv = document.createElement("div");
  listingHeadingDiv.classList.add("mt-4", "w-full");

  const listingsHeading = document.createElement("h2");
  listingsHeading.classList.add("text-3xl", "font-bold", "mb-6", "text-left");
  listingsHeading.textContent = "Listings";

  listingHeadingDiv.append(listingsHeading);

  const listingsContainer = document.createElement("div");
  listingsContainer.classList.add("mt-4", "w-full");

  containerDiv.append(cardDiv, listingHeadingDiv, listingsContainer);

  main.append(containerDiv);

  createCards(listings, listingsContainer);
}
