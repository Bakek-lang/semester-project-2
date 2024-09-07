import { load } from "../localstorage/load";
import { createProfile } from "../ui/createProfile";

export function profilePage() {
  const sellerProfile = load("sellerProfile");
  console.log(sellerProfile);

  createProfile(sellerProfile);
}
