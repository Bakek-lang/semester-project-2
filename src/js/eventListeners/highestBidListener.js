import { disableSubmitButton } from "../errorhandling/disableSubmitButton";
import { enableSubmitButton } from "../errorhandling/enableSubmitButton";

export function highestBidListener(listing) {
  const currentHighestBid = listing.bids[0].amount || 0;
  const bidInput = document.getElementById("bid-input");
  const submitButton = document.getElementById("submit-bid-btn");

  bidInput.addEventListener("input", (event) => {
    const userBid = parseInt(event.target.value);
    const errorDiv = document.getElementById("error-div-bid");

    if (userBid <= currentHighestBid) {
      disableSubmitButton(submitButton);
      errorDiv.classList.remove("hidden");
      errorDiv.textContent = `Your bid must be higher than the current highest bid of ${currentHighestBid} credits`;
    } else {
      errorDiv.textContent = "";
      enableSubmitButton(submitButton);
    }
  });
}
