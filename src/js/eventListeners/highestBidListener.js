export function highestBidListener(listing) {
  const currentHighestBid = listing.bids[0].amount || 0;
  const bidInput = document.getElementById("bid-input");

  bidInput.addEventListener("blur", (event) => {
    const userBid = parseInt(event.target.value);

    if (userBid <= currentHighestBid) {
      alert(
        `Your bid must be higher than the current highest bid of ${currentHighestBid}`
      );
      event.target.value = "";
    }
  });
}
