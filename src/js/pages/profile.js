import { updateUserProfile } from "../data/API/updateUserProfile";
import { isLoggedIn } from "../localstorage/isLoggedIn";
import { load } from "../localstorage/load";
import { createProfile } from "../ui/createProfile";

export function profilePage() {
  const sellerProfile = load("sellerProfile");

  console.log("sellerProfile: ", sellerProfile);

  createProfile(sellerProfile.data[0].seller, sellerProfile);

  if (isLoggedIn()) {
    updateUserProfile();
  }
}
