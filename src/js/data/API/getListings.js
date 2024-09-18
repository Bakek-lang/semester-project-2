import { sortListingsByExpiration } from "../../helpers/sortListings.js";
import { API_AUCTION, API_BASE, API_LISTINGS } from "./constants.js";
import { fetchData } from "./fetch.js";

async function fetchAllListings() {
  let allListings = [];
  let currentPage = 1;
  let totalPageCount = 1;
  const LIMIT = 100;

  const firstResponse = await fetchData(
    `${API_BASE}${API_AUCTION}${API_LISTINGS}?_bids=true&_seller=true&page=${currentPage}&limit=${LIMIT}`
  );

  const validFirstListings = firstResponse.data.filter((listing) => {
    return listing.media && listing.media.length > 0 && listing.media[0].url;
  });

  allListings = allListings.concat(validFirstListings);
  totalPageCount = firstResponse.meta.pageCount;

  while (currentPage < totalPageCount) {
    currentPage++;
    const nextResponse = await fetchData(
      `${API_BASE}${API_AUCTION}${API_LISTINGS}?_bids=true&_seller=true&page=${currentPage}&limit=${LIMIT}`
    );

    const validNextListings = nextResponse.data.filter((listing) => {
      return listing.media && listing.media.length > 0 && listing.media[0].url;
    });

    allListings = allListings.concat(validNextListings);
  }

  const sortedListings = sortListingsByExpiration(allListings);

  return { data: sortedListings };
}

export const listings = await fetchAllListings();
