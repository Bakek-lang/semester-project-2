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

export function addSellerLinkClickListener(sellerLink) {
  sellerLink.addEventListener("click", async (event) => {
    event.stopPropagation();

    const sellerName = sellerLink.textContent;
    console.log(sellerName);

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

      save("sellerProfile", sellerProfile);

      window.location.href = "/profile/";
    } catch (error) {
      console.error("finding profile didnt work");
    }
  });
}
