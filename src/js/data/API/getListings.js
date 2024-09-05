import { API_AUCTION, API_BASE, API_LISTINGS } from "./constants.js";
import { fetchData } from "./fetch.js";

export const listings = await fetchData(API_BASE + API_AUCTION + API_LISTINGS);
