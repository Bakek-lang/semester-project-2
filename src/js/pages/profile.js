import { updateUserProfile } from "../data/API/updateUserProfile";
import { load } from "../localstorage/load";
import { createProfile } from "../ui/createProfile";

export function profilePage() {
  const sellerProfile = load("sellerProfile");

  createProfile(sellerProfile.data[0].seller, sellerProfile);

  updateUserProfile();
}
