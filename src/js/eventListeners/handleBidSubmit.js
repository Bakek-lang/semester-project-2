import {
  API_AUCTION,
  API_BASE,
  API_BIDS,
  API_KEY,
  API_LISTINGS,
} from "../data/API/constants";
import { checkCredits } from "../errorhandling/checks/checkCredits";
import { checkHighestBid } from "../errorhandling/checks/checkHighestBid";
import { load } from "../localstorage/load";

/**
 * Handles the submission of a bid for a given listing.
 *
 * This function validates the bid amount entered by the user to ensure it is higher than the current highest bid and that the user has enough credits to place the bid. If the bid is valid, it submits the bid to the API. If the bid fails due to validation or other reasons, appropriate error messages are displayed.
 *
 * @function handleBidSubmit
 *
 * @param {object} listing - The auction listing object containing bid information.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM and makes an API request.
 *
 * @description
 * - Validates that the bid amount is higher than the current highest bid and that the user has enough credits.
 * - Displays error messages if validation fails.
 * - Submits the bid to the API if validation passes.
 * - Reloads the page after a successful bid submission.
 *
 * @example
 * const listing = { id: 123, bids: [{ amount: 100 }] };
 * handleBidSubmit(listing); // Sets up the bid submission for the provided listing
 */
export function handleBidSubmit(listing) {
  const bidInput = document.getElementById("bid-input");
  const submitButton = document.getElementById("submit-bid-btn");
  const errorDiv = document.getElementById("error-div-bid");

  const profile = load("personalProfile");
  const userCredits = profile.credits;
  const currentHighestBid =
    listing.bids && listing.bids.length > 0 ? listing.bids[0].amount : 0;

  submitButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const bidAmount = parseInt(bidInput.value);

    if (!checkHighestBid(bidAmount, currentHighestBid)) {
      errorDiv.classList.remove("hidden");
      errorDiv.textContent = `Your bid must be higher than the current highest bid of ${currentHighestBid}`;
      return;
    }
    if (!checkCredits(bidAmount, userCredits)) {
      errorDiv.classList.remove("hidden");
      errorDiv.textContent = `You don't have enough credits. Available credits: ${userCredits}`;
      return;
    }

    errorDiv.classList.add("hidden");
    errorDiv.textContent = "";

    const listingId = listing.id;
    const apiEndpoint =
      API_BASE + API_AUCTION + API_LISTINGS + "/" + listingId + API_BIDS;

    const amountBody = {
      amount: bidAmount,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${load("accessToken")}`,
          "X-Noroff-API-Key": API_KEY,
        },
        body: JSON.stringify(amountBody),
      });

      if (!response.ok) {
        console.error("Failed to make bid: ", error);
      }

      window.location.reload();
    } catch (error) {
      console.error("Could not make bid on listing: ", error);
      errorDiv.classList.remove("hidden");
      errorDiv.textContent = "You can not bid on your own item";
    }
  });
}
