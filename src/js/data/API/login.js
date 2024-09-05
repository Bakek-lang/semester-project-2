import { save } from "../../localstorage/save.js";
import { API_AUTH, API_BASE, API_LOGIN } from "./constants.js";

export async function loginUser(email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("accessToken", accessToken);
    save("profile", profile);
    return profile;
  }
}
