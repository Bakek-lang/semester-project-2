import { load } from "../../localstorage/load";
import { save } from "../../localstorage/save";
import { API_AUCTION, API_BASE, API_KEY, API_PROFILES } from "./constants";

export async function updateSettings(imageUrl, altText, bioText) {
  const profile = load("profile");
  const name = profile.name;
  const apiEndpoint = API_BASE + API_AUCTION + API_PROFILES + "/" + name;

  const updatedData = {
    bio: bioText || "",
    avatar: {
      url: imageUrl,
      alt: altText || "User Avatar",
    },
  };

  try {
    const response = await fetch(apiEndpoint, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${load("accessToken")}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      console.error("Failed to update profile: ", error);
    }

    const updatedProfile = await response.json();
    save("personalProfile", updatedProfile.data);

    console.log(updatedProfile);
    window.location.reload();
  } catch (error) {
    console.log("Error updating settings: ", error);
  }
}
