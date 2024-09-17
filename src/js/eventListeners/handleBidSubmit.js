import { checkCredits } from "../errorhandling/checks/checkCredits";
import { checkHighestBid } from "../errorhandling/checks/checkHighestBid";
import { disableSubmitButton } from "../errorhandling/disableSubmitButton";
import { enableSubmitButton } from "../errorhandling/enableSubmitButton";
import { load } from "../localstorage/load";

export function handleBidSubmit(listing) {
  const bidInput = document.getElementById("bid-input");
  const submitButton = document.getElementById("submit-bid-btn");
  const errorDiv = document.getElementById("error-div-bid");

  const profile = load("personalProfile");
  const userCredits = profile.credits;
  const currentHighestBid = listing.bids[0].amount || 0;

  submitButton.addEventListener("click", (event) => {
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
  });
}
