import { addSellerLinkClickListener } from "../eventListeners/sellerLink";
import { updateTimeAgo } from "../helpers/calculateBidTime";
import { startCountdown } from "../helpers/countdown";
export function createPost(listing) {
  console.log("this is listing on post specific", listing);
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

  const listingImages = listing.media;

  if (listingImages.length > 1) {
    listingImages.forEach((mediaItem) => {
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
        "border",
        "border-transparent"
      );

      thumbnailRow.append(img);
    });

    mediaGallery.append(thumbnailRow);
  }

  flexContainer.append(mediaGallery);

  const sellerDiv = document.createElement("div");
  sellerDiv.classList.add("ml-1");

  const sellerFlex = document.createElement("div");
  sellerFlex.classList.add("mt-2", "flex", "items-center");

  const sellerAvatar = document.createElement("img");
  sellerAvatar.src = listing.seller.avatar.url;
  sellerAvatar.alt = listing.seller.avatar.alt;
  sellerAvatar.classList.add("w-10", "h-10", "rounded-full");

  const sellerLink = document.createElement("a");
  sellerLink.href = "#";
  sellerLink.textContent = listing.seller.name;
  sellerLink.classList.add("ml-2", "font-semibold", "underline");
  sellerLink.setAttribute("data-attribute", "seller-link");

  sellerFlex.append(sellerAvatar, sellerLink);
  sellerDiv.append(sellerFlex);

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

  timeLeftValueDiv.append(timeLeftIcon, timeLeftValue);
  timeLeftDiv.append(timeLeftValueDiv);

  startCountdown(listing.endsAt, timeLeftValue);

  grid.append(currentBidDiv, timeLeftDiv);

  sellerDiv.append(grid);

  const bidSection = document.createElement("form");
  bidSection.classList.add("mt-6", "flex", "flex-col");

  const bidLabel = document.createElement("label");
  bidLabel.textContent = "Place a bid:";

  const bidInput = document.createElement("input");
  bidInput.setAttribute("id", "bid-input");
  bidInput.type = "text";
  bidInput.classList.add(
    "border",
    "w-1/3",
    "rounded",
    "py-2",
    "text-right",
    "pr-4"
  );

  const errorDiv = document.createElement("div");
  errorDiv.classList.add("hidden", "text-red-600", "font-bold", "mb-2");
  errorDiv.setAttribute("id", "error-div-bid");

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("flex", "mt-4");

  const confirmButton = document.createElement("button");
  confirmButton.type = "submit";
  confirmButton.classList.add("bg-orange-600", "py-2", "px-6", "rounded");
  confirmButton.textContent = "Confirm Bid";
  confirmButton.setAttribute("id", "submit-bid-btn");

  bidSection.append(bidLabel, errorDiv, bidInput);
  buttonDiv.append(confirmButton);
  bidSection.append(buttonDiv);

  sellerDiv.append(bidSection);

  flexContainer.append(sellerDiv);
  const sellerLinkTag = flexContainer.querySelector(
    "[data-attribute='seller-link']"
  );
  addSellerLinkClickListener(sellerLinkTag);

  const bidsContainer = document.createElement("div");
  bidsContainer.classList.add("mt-8", "ml-1");

  const headerRow = document.createElement("div");
  headerRow.classList.add(
    "flex",
    "font-bold",
    "border-b",
    "border-gray-300",
    "py-2"
  );

  const bidderHeader = document.createElement("div");
  bidderHeader.classList.add("w-1/2");
  bidderHeader.textContent = "Bidder";

  const timeAgoHeader = document.createElement("div");
  timeAgoHeader.classList.add("w-1/4");
  timeAgoHeader.textContent = "Time Ago";

  const creditsHeader = document.createElement("div");
  creditsHeader.classList.add("w-1/4");
  creditsHeader.textContent = "Credits";

  headerRow.append(bidderHeader, timeAgoHeader, creditsHeader);
  bidsContainer.append(headerRow);

  const reverseBids = listing.bids.reverse();

  reverseBids.forEach((bid, index) => {
    const row = document.createElement("div");
    row.classList.add("flex", "py-2", "border-b", "border-gray-300");

    const bidderUserDiv = document.createElement("div");
    bidderUserDiv.classList.add("w-1/2", "flex", "items-center");

    const bidderImage = document.createElement("img");
    bidderImage.src = bid.bidder.avatar.url;
    bidderImage.alt = bid.bidder.avatar.alt;
    bidderImage.classList.add("w-8", "h-8", "rounded-full", "mr-2");

    const bidderName = document.createElement("span");
    bidderName.textContent = bid.bidder.name;

    bidderUserDiv.append(bidderImage, bidderName);

    const timeAgoDiv = document.createElement("span");
    timeAgoDiv.classList.add("w-1/4", "flex", "items-center");

    updateTimeAgo(bid.created, timeAgoDiv);

    const creditsDiv = document.createElement("div");
    creditsDiv.classList.add("w-1/4", "flex", "items-center");

    const creditsSpan = document.createElement("span");
    creditsSpan.textContent = bid.amount;

    creditsDiv.append(creditsSpan);
    if (index === 0) {
      const winnerMedal = document.createElement("i");
      winnerMedal.textContent = "🥇";
      winnerMedal.classList.add("text-4xl", "ml-2");
      creditsDiv.append(winnerMedal);
      row.classList.add("font-bold");
    }

    row.append(bidderUserDiv, timeAgoDiv, creditsDiv);

    bidsContainer.append(row);
  });

  flexContainer.append(bidsContainer);
  container.append(flexContainer);
}
