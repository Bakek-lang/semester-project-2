/**
 * Checks if a given end date has passed, indicating whether the event or auction has expired.
 *
 * This function compares the current date and time with the provided `endsAt` date to determine if the event has expired.
 *
 * @function isExpired
 *
 * @param {string} endsAt - The end date in ISO 8601 format, representing when the event or auction ends.
 *
 * @returns {boolean} Returns `true` if the current date and time is equal to or after the `endsAt` date, otherwise `false`.
 *
 * @description
 * - Compares the current date and time to the provided `endsAt` date.
 * - Returns `true` if the current time has passed the end date, otherwise returns `false`.
 *
 * @example
 * const expired = isExpired('2023-09-22T12:00:00Z');
 * console.log(expired); // Outputs true if the event has expired, otherwise false
 */
export function isExpired(endsAt) {
  const now = new Date();
  const endDate = new Date(endsAt);
  return now >= endDate;
}
