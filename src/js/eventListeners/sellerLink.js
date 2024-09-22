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
