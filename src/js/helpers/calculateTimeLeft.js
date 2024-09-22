/**
 * Calculates the time left until a given end date and returns a human-readable string.
 *
 * This function compares the current date and time to the provided end date (`endsAt`) and returns a string indicating how much time is left in days, hours, minutes, or seconds. If the time has passed, it returns "Expired".
 *
 * @function calculateTimeLeft
 *
 * @param {string} endsAt - The end date in ISO 8601 format, representing when the auction or event ends.
 *
 * @returns {string} A human-readable string representing the time left (e.g., "2 days left", "3 hours left", "< 1 minute left", or "Expired").
 *
 * @description
 * - Calculates the difference between the current time and the given end date.
 * - Returns the time left in the largest applicable unit: days, hours, minutes, or "< 1 minute".
 * - If the time has passed, returns "Expired".
 *
 * @example
 * const timeLeft = calculateTimeLeft('2023-09-30T12:00:00Z');
 * console.log(timeLeft); // Outputs how much time is left until the given date, or "Expired" if the time has passed
 */
export function calculateTimeLeft(endsAt) {
  const now = new Date();
  const endDate = new Date(endsAt);
  const diff = endDate - now;

  const secondsLeft = Math.floor(diff / 1000);
  const minutesLeft = Math.floor(diff / (1000 * 60));
  const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (daysLeft > 0) {
    return `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`;
  } else if (hoursLeft > 0) {
    return `${hoursLeft} hour${hoursLeft > 1 ? "s" : ""} left`;
  } else if (minutesLeft > 0) {
    return `${minutesLeft} minute${minutesLeft > 1 ? "s" : ""} left`;
  } else if (secondsLeft > 0) {
    return `< 1 minute left`;
  } else {
    return `Expired`;
  }
}
