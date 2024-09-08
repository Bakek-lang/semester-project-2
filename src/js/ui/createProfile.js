import { createCards } from "./createCard";

export function createProfile(profile) {
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
  img.src = profile.data[0].seller.avatar.url;
  img.alt = profile.data[0].seller.avatar.alt;

  const h1 = document.createElement("h1");
  h1.classList.add("text-2xl", "font-semibold", "mt-4");
  h1.textContent = profile.data[0].seller.name;

  const bio = document.createElement("p");
  bio.classList.add("mt-4");
  bio.textContent = profile.data[0].seller.bio || "";

  cardDiv.append(img, h1, bio);

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

  createCards(profile, listingsContainer);
}
