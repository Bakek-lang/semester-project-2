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
  img.src = profile.avatar.url;
  img.alt = profile.avatar.alt;

  const h1 = document.createElement("h1");
  h1.classList.add("text-2xl", "font-semibold", "mt-4");
  h1.textContent = profile.name;

  const bio = document.createElement("p");
  bio.classList.add("mt-4");
  bio.textContent = profile.bio || "";

  cardDiv.append(img, h1, bio);

  const listingsContainer = document.createElement("div");
  listingsContainer.classList.add("mt-4", "w-full");

  const listingsHeading = document.createElement("h2");
  listingsHeading.classList.add("text-3xl", "font-bold", "mb-6", "text-left");
  listingsHeading.textContent = "Listings";

  listingsContainer.append(listingsHeading);

  containerDiv.append(cardDiv, listingsContainer);

  main.append(containerDiv);
}
