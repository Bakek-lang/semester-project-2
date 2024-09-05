export async function fetchData(url, object) {
  const response = await fetch(url, object);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("response code:", response.status);
  }

  return result;
}
