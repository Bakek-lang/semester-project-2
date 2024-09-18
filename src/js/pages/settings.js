import { getProfileListings } from "../data/API/getProfileListings";
import { updateUserProfile } from "../data/API/updateUserProfile";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { load } from "../localstorage/load";
import { createProfile } from "../ui/createProfile";

export function settingsPage() {
  getProfileListings();

  const profileListings = load("profileListings");
  const profile = load("personalProfile");

  createProfile(profile, profileListings);

  if (isLoggedIn()) {
    updateUserProfile();
  }
}
