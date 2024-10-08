import { addCardClickListener } from "../eventListeners/cardClick";
import { addSellerLinkClickListener } from "../eventListeners/sellerLink";
import { calculateTimeLeft } from "../helpers/calculateTimeLeft";
import { isExpired } from "../helpers/isExpired";
import { shortenDescription } from "../helpers/shortenDescription";

/**
 * Dynamically creates and displays auction listing cards in a specified container.
 *
 * This function generates cards for each listing in the provided `listings` data array. Each card includes the listing's image, title, description, bids, end date, and a link to the seller's profile. The cards are appended to the specified `container`. If the listing is not expired, a "Bid Now" button is also included.
 *
 * @function createCards
 *
 * @param {object} listings - An object containing the auction listings data, including media, seller, and bid information.
 * @param {HTMLElement} container - The DOM element where the generated cards will be appended.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by appending cards to the container.
 *
 * @description
 * - Clears the `container` content before appending the new cards.
 * - Loops through the `listings` data, generating a card for each listing with its image, title, description, and additional details such as bid count and time remaining.
 * - If a listing has no image, a placeholder is used.
 * - Adds event listeners to each card and seller link, handling navigation and profile viewing.
 * - Displays a "Bid Now" button for active listings that have not yet expired.
 *
 * @example
 * const listings = { data: [...] }; // An array of listing objects
 * const container = document.querySelector("[data-attribute='container']");
 * createCards(listings, container); // Renders the auction listing cards in the container
 */
export function createCards(listings, container) {
  if (listings.data.length === 0) {
    return;
  }

  container.innerHTML = "";
  for (let i = 0; i < listings.data.length; i++) {
    const card = document.createElement("div");
    card.classList.add(
      "max-w-sm",
      "h-lg",
      "w-96",
      "rounded-xl",
      "bg-white",
      "mt-6",
      "drop-shadow-lg",
      "cursor-pointer"
    );

    const img = document.createElement("img");
    img.classList.add("w-full", "rounded-t-xl", "object-cover", "h-72");
    img.src = listings.data[i].media[0].url;
    img.alt = listings.data[i].media[0].alt;

    img.onerror = () => {
      img.src = "https://placehold.co/600x400";
    };

    card.append(img);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("p-4");

    const title = document.createElement("h2");
    title.classList.add("text-2xl", "font-bold", "mb-2");
    title.textContent = listings.data[i].title;

    const description = document.createElement("p");
    description.classList.add("text-gray-700", "mb-4", "text-wrap");

    description.textContent = listings.data[i].description
      ? shortenDescription(listings.data[i].description)
      : "This listing doesn't have a description";

    contentDiv.append(title, description);

    card.append(contentDiv);

    const grid = document.createElement("div");
    grid.classList.add(
      "grid",
      "grid-cols-2",
      "gap-4",
      "text-left",
      "mb-4",
      "p-4"
    );

    const numberBids = listings.data[i]._count?.bids || 0;
    const lastBidAmount =
      numberBids > 0 ? listings.data[i].bids[numberBids - 1].amount : 0;
    const endsAt = listings.data[i].endsAt || "No end date available";

    const gridItems = [
      { icon: "💵", text: lastBidAmount },
      { icon: "⏳", text: calculateTimeLeft(endsAt) },
      { icon: "🔨", text: numberBids },
    ];

    gridItems.forEach((item) => {
      const flexDiv = document.createElement("div");
      flexDiv.classList.add("flex", "items-center");

      const iconElement = document.createElement("i");
      iconElement.classList.add("text-3xl");
      iconElement.textContent = item.icon;

      const textElement = document.createElement("p");
      textElement.classList.add("ml-1");
      textElement.textContent = item.text;

      flexDiv.append(iconElement, textElement);

      grid.append(flexDiv);
    });

    const sellerFlexDiv = document.createElement("div");
    sellerFlexDiv.classList.add("flex", "items-center", "text-wrap");

    const sellerIconElement = document.createElement("i");
    sellerIconElement.classList.add("text-3xl");
    sellerIconElement.textContent = "👤";

    const sellerLink = document.createElement("a");
    sellerLink.href = "#";
    sellerLink.textContent = listings.data[i].seller.name;
    sellerLink.classList.add("underline", "text-blue-500", "ml-1");
    sellerLink.setAttribute("data-attribute", "seller-link");

    sellerFlexDiv.append(sellerIconElement, sellerLink);
    grid.append(sellerFlexDiv);

    card.append(grid);

    if (!isExpired(endsAt)) {
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("flex", "p-4");

      const button = document.createElement("button");
      button.classList.add("bg-orange-600", "py-2", "px-6", "rounded");
      button.textContent = "Bid Now";

      buttonContainer.append(button);

      card.append(buttonContainer);
    }

    container.append(card);

    addCardClickListener(card, listings.data[i].id);

    const sellerLinkTag = card.querySelector("[data-attribute='seller-link']");
    addSellerLinkClickListener(sellerLinkTag);
  }
}
