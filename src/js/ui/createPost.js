export function createPost(listing) {
  const container = document.querySelector("main");
  container.innerHTML = "";

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex", "flex-col", "mt-3", "p-4");

  const mediaGallery = document.createElement("div");
  mediaGallery.classList.add("media-gallery");

  const heroImage = document.createElement("img");
  heroImage.id = "hero-image";
  heroImage.classList.add(
    "justify-center",
    "object-cover",
    "rounded-lg",
    "h-64",
    "w-full"
  );
  heroImage.src = listing.media[0].url;
  heroImage.alt = listing.media[0].alt;

  mediaGallery.append(heroImage);

  const thumbnailRow = document.createElement("div");
  thumbnailRow.classList.add("thumbnail-row", "flex");

  listing.media.forEach((mediaItem) => {
    const img = document.createElement("img");
    img.src = mediaItem.url;
    img.alt = mediaItem.alt || "Thumbnail";
    img.classList.add(
      "thumbnail",
      "w-1/4",
      "object-cover",
      "rounded-lg",
      "cursor-pointer",
      "border-4",
      "border-transparent"
    );

    thumbnailRow.append(img);
  });

  mediaGallery.append(thumbnailRow);

  flexContainer.append(mediaGallery);

  const sellerDiv = document.createElement("div");
  sellerDiv.classList.add("ml-1");

  const sellerFlex = document.createElement("div");
  sellerFlex.classList.add("mt-2", "flex", "items-center");

  const sellerAvatar = document.createElement("div");
  sellerAvatar.src = listing.seller.avatar.url;
  sellerAvatar.alt = listing.seller.avatar.alt;
  sellerAvatar.classList.add("w-10", "h-10", "rounded-full");

  const sellerLink = document.createElement("a");
  sellerLink.href = "#";
  sellerLink.textContent = listing.seller.name;
  sellerLink.classList.add("ml-2", "font-semibold", "underline");

  sellerFlex.append(sellerAvatar, sellerLink);

  const title = document.createElement("h1");
  title.classList.add("text-3xl", "font-bold", "mt-4");
  title.textContent = listing.title;

  const description = document.createElement("p");
  description.classList.add("text-gray-700", "mt-2");
  description.textContent = listing.description;

  sellerDiv.append(title, description);

  const grid = document.createElement("div");
  grid.classList.add("grid", "grid-cols-2", "gap-4", "mt-4", "text-left");

  const currentBidDiv = document.createElement("div");
  currentBidDiv.classList.add("items-center");

  const currentBidLabel = document.createElement("p");
  currentBidLabel.textContent = "Current bid:";
  currentBidDiv.append(currentBidLabel);

  const currentBidValueDiv = document.createElement("div");
  currentBidValueDiv.classList.add("flex", "items-center");

  const currentBidIcon = document.createElement("i");
  currentBidIcon.classList.add("text-2xl");
  currentBidIcon.textContent = "💵";

  const currentBidValue = document.createElement("p");
  currentBidValue.classList.add("ml-1");

  const numberBids = listing._count.bids;
  const lastBidAmount =
    numberBids > 0 ? listing.bids[numberBids - 1].amount : 0;
  currentBidValue.textContent = lastBidAmount;

  currentBidValueDiv.append(currentBidIcon, currentBidValue);
  currentBidDiv.append(currentBidValueDiv);

  // time left
  const timeLeftDiv = document.createElement("div");
  timeLeftDiv.classList.add("items-center");

  const timeLeftLabel = document.createElement("p");
  timeLeftLabel.textContent = "Time left:";
  timeLeftDiv.append(timeLeftLabel);

  const timeLeftValueDiv = document.createElement("div");
  timeLeftValueDiv.classList.add("flex", "items-center");

  const timeLeftIcon = document.createElement("i");
  timeLeftIcon.classList.add("text-2xl");
  timeLeftIcon.textContent = "⏳";

  const timeLeftValue = document.createElement("p");
  timeLeftValue.classList.add("ml-1");
  timeLeftValue.textContent = listing.endsAt;

  timeLeftValueDiv.append(timeLeftIcon, timeLeftValue);
  timeLeftDiv.append(timeLeftValueDiv);

  grid.append(currentBidDiv, timeLeftDiv);

  sellerDiv.append(grid);

  const bidSection = document.createElement("div");
  bidSection.classList.add("mt-6");

  const bidLabel = document.createElement("p");
  bidLabel.textContent = "Place a bid:";

  const bidInput = document.createElement("input");
  bidInput.type = "text";
  bidInput.classList.add(
    "border",
    "w-1/3",
    "rounded",
    "py-2",
    "text-right",
    "pr-4"
  );

  // Confirm button
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("flex", "mt-4");

  const confirmButton = document.createElement("button");
  confirmButton.classList.add("bg-orange-600", "py-2", "px-6", "rounded");
  confirmButton.textContent = "Confirm Bid";

  bidSection.append(bidLabel, bidInput);
  buttonDiv.append(confirmButton);
  bidSection.append(buttonDiv);

  sellerDiv.append(bidSection);

  flexContainer.append(sellerDiv);

  container.append(flexContainer);
}
