/**
 * Fetches data from a given URL with the specified options.
 *
 * This function sends a fetch request to the provided URL using the options specified in the object parameter.
 * It parses the response as JSON and throws an error if the response status is not OK.
 *
 * @async
 * @function fetchData
 *
 * @param {string} url - The URL to which the fetch request is sent.
 * @param {object} object - The fetch request options, including headers, method, body, etc.
 *
 * @throws {Error} If the response status is not OK (status code other than 2xx).
 *
 * @returns {Promise<object>} A promise that resolves to the result of the fetch request, parsed as JSON.
 *
 * @example
 * const data = await fetchData('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: { 'Content-Type': 'application/json' }
 * });
 */
export async function fetchData(url, object) {
  const response = await fetch(url, object);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("response code:", response.status);
  }

  return result;
}
