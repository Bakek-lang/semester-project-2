import { disableSubmitButton } from "../errorhandling/disableSubmitButton";
import { load } from "../localstorage/load";

export function creditBidListener() {
  const profile = load("personalProfile");
  const credits = profile.credits;

  const bidInput = document.getElementById("bid-input");
  const submitButton = document.getElementById("submit-bid-btn");

  bidInput.addEventListener("blur", (event) => {
    const userBid = parseInt(event.target.value);

    const errorDiv = document.getElementById("error-div-bid");

    if (userBid > credits) {
      errorDiv.textContent = `You don't have enough credits. Available credits: ${credits}`;
      disableSubmitButton(submitButton);
    }
  });
}
