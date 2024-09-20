import { displaySearchResults } from "../../display/displaySearchResults";
import { sortListingsByExpiration } from "../../helpers/sortListings";
import { API_AUCTION, API_BASE, API_LISTINGS } from "./constants";
import { fetchData } from "./fetch";

export async function searchListings(search) {
  const apiEndpoint = `${API_BASE}${API_AUCTION}${API_LISTINGS}/search?q=${search}&_bids=true&_seller=true`;

  console.log(apiEndpoint);

  try {
    const listings = await fetchData(apiEndpoint);

    listings.data = listings.data.filter((listing) => {
      return listing.media && listing.media.length > 0 && listing.media[0].url;
    });

    listings.data = sortListingsByExpiration(listings.data);

    displaySearchResults(listings);
    return listings;
  } catch (error) {
    console.log("Could not fetch search results");
  }
}
