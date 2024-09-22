import {
  API_AUCTION,
  API_BASE,
  API_KEY,
  API_LISTINGS,
  API_PROFILES,
} from "../data/API/constants";
import { fetchData } from "../data/API/fetch.js";
import { save } from "../localstorage/save";
import { load } from "../localstorage/load.js";
import { sortListingsByExpiration } from "../helpers/sortListings";
import { isLoggedIn } from "../localstorage/isLoggedIn";

/**
 * Adds a click event listener to a seller link that navigates to the seller's profile page.
 *
 * This function handles the click event on a seller link. It checks if the user is logged in, and if not, redirects them to the login page. If the user is logged in, it fetches the seller's profile and listings, filters valid listings, and saves the seller profile to localStorage. Finally, it redirects the user to the seller's profile page.
 *
 * @function addSellerLinkClickListener
 *
 * @param {HTMLElement} sellerLink - The link element that triggers navigation to the seller's profile.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM and makes API calls.
 *
 * @description
 * - Attaches a click event listener to the seller link.
 * - Prevents the click event from propagating to other elements.
 * - Redirects the user to the login page if they are not logged in.
 * - Fetches the seller's profile and listings from the API if the user is logged in.
 * - Filters listings that contain valid media (image URLs).
 * - Saves the seller's profile to localStorage.
 * - Redirects the user to the seller's profile page (`/profile/`).
 *
 * @example
 * const sellerLink = document.getElementById('seller-link');
 * addSellerLinkClickListener(sellerLink); // Adds navigation functionality to the seller link
 */
export function addSellerLinkClickListener(sellerLink) {
  sellerLink.addEventListener("click", async (event) => {
    event.stopPropagation();

    if (!isLoggedIn()) {
      window.location.href = "/login/";
      return;
    }

    const sellerName = sellerLink.textContent;

    try {
      const sellerProfile = await fetchData(
        API_BASE +
          API_AUCTION +
          API_PROFILES +
          "/" +
          sellerName +
          API_LISTINGS +
          "?_bids=true&_seller=true",
        {
          headers: {
            Authorization: `Bearer ${load("accessToken")}`,
            "X-Noroff-API-Key": API_KEY,
          },
        }
      );

      sellerProfile.data = sellerProfile.data.filter((listing) => {
        return (
          listing.media && listing.media.length > 0 && listing.media[0].url
        );
      });
      sellerProfile.data = sortListingsByExpiration(sellerProfile.data);
      save("sellerProfile", sellerProfile);

      window.location.href = "/profile/";
    } catch (error) {
      console.error("finding profile didnt work");
    }
  });
}
