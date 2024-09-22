/**
 * Updates an element's text content to display how long ago a certain time was in a "time ago" format.
 *
 * This function calculates the difference between the current time and the given ISO date, and updates the text content of the provided element with a human-readable "time ago" format (e.g., "5m ago", "2h ago", "3d ago").
 *
 * @function updateTimeAgo
 *
 * @param {string} isoDate - The ISO 8601 formatted date string representing the time of the event.
 * @param {HTMLElement} element - The DOM element whose text content will be updated with the "time ago" format.
 *
 * @returns {void} This function does not return a value, but it modifies the DOM by updating the text content of the element.
 *
 * @description
 * - Calculates the difference between the current time and the provided `isoDate`.
 * - Converts the time difference into days, hours, minutes, or seconds.
 * - Updates the provided `element` with the appropriate "time ago" format.
 *
 * @example
 * const isoDate = '2023-09-22T12:00:00Z';
 * const timeElement = document.getElementById('time-ago');
 * updateTimeAgo(isoDate, timeElement); // Updates the time element with how long ago the bid was placed
 */
export function updateTimeAgo(isoDate, element) {
  const now = new Date();
  const bidTime = new Date(isoDate);
  const diff = now - bidTime;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    element.textContent = `${days}d ago`;
  } else if (hours > 0) {
    element.textContent = `${hours}h ago`;
  } else if (minutes > 0) {
    element.textContent = `${minutes}m ago`;
  } else {
    element.textContent = `Just now`;
  }
}
