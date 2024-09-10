import { load } from "../../localstorage/load";
import { save } from "../../localstorage/save";
import { renderUserMenu } from "../../ui/renderUserMenu";
import { API_AUCTION, API_BASE, API_KEY, API_PROFILES } from "./constants";
import { fetchData } from "./fetch";

export async function updateUserProfile() {
  const profile = load("profile");
  const name = profile.name;
  try {
    console.log(API_BASE + API_AUCTION + API_PROFILES + "/" + name);
    const profile = await fetchData(
      API_BASE + API_AUCTION + API_PROFILES + "/" + name,
      {
        headers: {
          Authorization: `Bearer ${load("accessToken")}`,
          "X-Noroff-API-Key": API_KEY,
        },
      }
    );
    console.log("profile", profile.data);
    save("personalProfile", profile.data);
    renderUserMenu(profile.data);
  } catch (error) {
    console.error("Error: ", error);
  }
}
