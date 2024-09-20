import { handleThumbnails } from "../eventListeners/thumbnail.js";
import { findCorrectListing } from "../data/findListing.js";
import { createPost } from "../ui/createPost.js";
import { updateUserProfile } from "../data/API/updateUserProfile.js";
import { bidInputListener } from "../eventListeners/bidInput.js";
import { handleBidSubmit } from "../eventListeners/handleBidSubmit.js";
import { isExpired } from "../helpers/isExpired.js";
import { isLoggedIn } from "../localstorage/isLoggedIn.js";
import { exportListings } from "../data/exportListings.js";

export async function postPage() {
  const listings = await exportListings();
  const listing = findCorrectListing(listings.data);
  createPost(listing);
  handleThumbnails();
  if (!isExpired(listing.endsAt)) {
    bidInputListener();
    handleBidSubmit(listing);
  }

  if (isLoggedIn()) {
    updateUserProfile();
  }
}
