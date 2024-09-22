/**
 * Calculates the end date based on a given duration and unit of time.
 *
 * This function adds the specified duration to the current date and returns the resulting date in ISO 8601 format. The duration can be in hours, days, or weeks.
 *
 * @function calculateEndDate
 *
 * @param {string|number} duration - The amount of time to add to the current date.
 * @param {string} unit - The unit of time, which can be "hours", "days", or "weeks".
 *
 * @returns {string} The calculated end date as an ISO 8601 formatted string.
 *
 * @description
 * - Takes the current date and adds the specified duration in the given unit (hours, days, or weeks).
 * - Returns the updated date in ISO 8601 format.
 *
 * @example
 * const endDate = calculateEndDate(2, 'days');
 * console.log(endDate); // Outputs the date and time two days from now in ISO 8601 format
 */
export function calculateEndDate(duration, unit) {
  const now = new Date();

  switch (unit) {
    case "hours":
      now.setHours(now.getHours() + parseInt(duration));
      break;
    case "days":
      now.setDate(now.getDate() + parseInt(duration));
      break;
    case "weeks":
      now.setDate(now.getDate() + parseInt(duration) * 7);
      break;
  }

  return now.toISOString();
}
