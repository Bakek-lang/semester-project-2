import { handleThumbnails } from "../eventListeners/thumbnail.js";
import { listings } from "../data/API/getListings.js";
import { findCorrectListing } from "../data/findListing.js";
import { createPost } from "../ui/createPost.js";
import { updateUserProfile } from "../data/API/updateUserProfile.js";
import { bidInputListener } from "../eventListeners/bidInput.js";
import { highestBidListener } from "../eventListeners/highestBidListener.js";

export function postPage() {
  const listing = findCorrectListing(listings.data);
  createPost(listing);
  handleThumbnails();
  bidInputListener();
  highestBidListener(listing);

  updateUserProfile();
}
