import { handleThumbnails } from "../eventListeners/thumbnail.js";
import { findCorrectListing } from "../data/findListing.js";
import { createPost } from "../ui/createPost.js";
import { updateUserProfile } from "../data/API/updateUserProfile.js";
import { bidInputListener } from "../eventListeners/bidInput.js";
import { handleBidSubmit } from "../eventListeners/handleBidSubmit.js";
import { isExpired } from "../helpers/isExpired.js";
import { isLoggedIn } from "../localstorage/isLoggedIn.js";
import { exportListings } from "../data/exportListings.js";

/**
 * Initializes the post page by loading the relevant listing data and setting up functionality for bids and thumbnails.
 *
 * This function loads the post page by fetching all auction listings, finding the correct listing based on the URL, and rendering the listing details. It sets up functionality for thumbnails, bid inputs, and bid submission. If the listing is not expired, bid functionality is enabled. If the user is logged in, the profile is updated.
 *
 * @async
 * @function postPage
 *
 * @returns {Promise<void>} A promise that resolves once the post page is fully initialized.
 *
 * @description
 * - Fetches all listings using `exportListings`.
 * - Finds the correct listing based on the URL using `findCorrectListing`.
 * - Renders the listing details using `createPost`.
 * - Sets up thumbnail functionality with `handleThumbnails`.
 * - If the listing is not expired, initializes bid input and submission functionality with `bidInputListener` and `handleBidSubmit`.
 * - If the user is logged in, updates the user's profile with `updateUserProfile`.
 *
 * @example
 * postPage(); // Initializes the post page with listing data, bid functionality, and UI updates
 */
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
