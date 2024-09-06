import { listings } from "../data/API/getListings.js";
import { findCorrectListing } from "../data/findListing.js";
import { createPost } from "../ui/createPost.js";

export function postPage() {
  const listing = findCorrectListing(listings.data);
  createPost(listing);
}
