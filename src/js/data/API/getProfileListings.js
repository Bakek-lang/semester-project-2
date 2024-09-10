import { load } from "../../localstorage/load";
import { save } from "../../localstorage/save";
import {
  API_AUCTION,
  API_BASE,
  API_KEY,
  API_LISTINGS,
  API_PROFILES,
} from "./constants";
import { fetchData } from "./fetch";

export async function getProfileListings() {
  const profile = load("profile");
  const name = profile.name;

  try {
    const profileListings = await fetchData(
      API_BASE +
        API_AUCTION +
        API_PROFILES +
        "/" +
        name +
        API_LISTINGS +
        "?_bids=true&_seller=true",
      {
        headers: {
          Authorization: `Bearer ${load("accessToken")}`,
          "X-Noroff-API-Key": API_KEY,
        },
      }
    );

    save("profileListings", profileListings);
  } catch (error) {
    console.error("Error while fetching profileListings: ", error);
  }
}
