import { fetchAllListings } from "./API/getListings";

export async function exportListings() {
  const listings = await fetchAllListings();
  return listings;
}
