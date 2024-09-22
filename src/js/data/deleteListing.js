import { API_AUCTION, API_BASE, API_KEY, API_LISTINGS } from "./API/constants";
import { load } from "../localstorage/load";

export async function deleteListing(id) {
  const apiEndpoint = API_BASE + API_AUCTION + API_LISTINGS + "/" + id;
  try {
    const response = await fetch(apiEndpoint, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${load("accessToken")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    if (!response.ok) {
      console.error("Could not delete profile");
    }

    window.location.href = "/";
  } catch (error) {
    console.error("Catched error: ", error);
  }
}
