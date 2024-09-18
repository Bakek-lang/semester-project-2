import { load } from "./load";

export function isLoggedIn() {
  return load("accessToken") !== null;
}
