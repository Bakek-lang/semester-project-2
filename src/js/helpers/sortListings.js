/**
 * Sorts an array of listings based on their expiration dates, prioritizing active listings over expired ones.
 *
 * This function sorts listings in ascending order based on their expiration dates. Active listings (those that have not expired) are placed before expired listings. Within each group (active and expired), listings are sorted by their expiration dates.
 *
 * @function sortListingsByExpiration
 *
 * @param {Array<object>} listingsArray - An array of listing objects, each containing an `endsAt` property (ISO date format).
 *
 * @returns {Array<object>} A sorted array where active listings are ordered by their closest expiration date, and expired listings follow, ordered by the most recently expired.
 *
 * @description
 * - Active listings (those that have not yet expired) are placed at the beginning of the array, sorted by the closest expiration date.
 * - Expired listings are placed at the end of the array, sorted by the most recently expired.
 * - The function compares the `endsAt` property of each listing to determine if it is active or expired and then sorts accordingly.
 *
 * @example
 * const listings = [
 *   { id: 1, endsAt: '2023-09-30T12:00:00Z' },
 *   { id: 2, endsAt: '2023-09-20T12:00:00Z' },
 *   { id: 3, endsAt: '2023-10-01T12:00:00Z' }
 * ];
 * const sortedListings = sortListingsByExpiration(listings);
 * console.log(sortedListings); // Outputs the listings sorted by expiration, with active ones first
 */
export function sortListingsByExpiration(listingsArray) {
  return listingsArray.sort((a, b) => {
    const now = new Date();

    const isAExpired = new Date(a.endsAt) < now;
    const isBExpired = new Date(b.endsAt) < now;

    if (!isAExpired && !isBExpired) {
      return new Date(a.endsAt) - new Date(b.endsAt);
    }

    if (isAExpired && !isBExpired) {
      return 1;
    }

    if (!isAExpired && isBExpired) {
      return -1;
    }

    return new Date(b.endsAt) - new Date(a.endsAt);
  });
}
