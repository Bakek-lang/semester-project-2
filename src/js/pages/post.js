import { handleThumbnails } from "../eventListeners/thumbnail.js";
import { listings } from "../data/API/getListings.js";
import { findCorrectListing } from "../data/findListing.js";
import { createPost } from "../ui/createPost.js";
import { updateUserProfile } from "../data/API/updateUserProfile.js";

export function postPage() {
  const listing = findCorrectListing(listings.data);
  createPost(listing);
  handleThumbnails();

  updateUserProfile();
}
