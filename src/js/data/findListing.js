/**
 * Finds the correct listing from a dataset based on the query parameter in the URL.
 *
 * This function extracts the `id` query parameter from the current URL and searches the provided dataset for a matching listing. It returns the listing whose `id` matches the query parameter.
 *
 * @function findCorrectListing
 *
 * @param {object[]} data - An array of listing objects to search through.
 *
 * @returns {object|undefined} The listing object that matches the `id` from the URL, or `undefined` if no match is found.
 *
 * @description
 * - Extracts the `id` parameter from the current page's URL.
 * - Searches the dataset (`data`) for an object with a matching `id`.
 * - Returns the matching listing object, or `undefined` if no listing matches the `id`.
 *
 * @example
 * const data = [{ id: 1, title: 'Item 1' }, { id: 2, title: 'Item 2' }];
 * const listing = findCorrectListing(data);
 * console.log(listing); // Outputs the listing object that matches the URL query parameter
 */
export function findCorrectListing(data) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const matchingListing = data.find(function (object) {
    return object.id.toString() === id;
  });
  return matchingListing;
}
