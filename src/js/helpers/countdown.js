/**
 * Starts a countdown timer that updates an element with the time left until a specified end date.
 *
 * This function calculates the time remaining until the `endsAt` date and updates the provided DOM element with the countdown in a human-readable format (days, hours, minutes, seconds). Once the countdown reaches zero, it displays "Expired" and reloads the page after a short delay.
 *
 * @function startCountdown
 *
 * @param {string} endsAt - The end date in ISO 8601 format, representing when the countdown ends.
 * @param {HTMLElement} element - The DOM element that displays the countdown timer.
 *
 * @returns {void} This function does not return a value, but it updates the text content of the provided element and sets up a countdown interval.
 *
 * @description
 * - Calculates the time remaining until the `endsAt` date and displays it in the format `Xd Xh Xm Xs`.
 * - If the time has expired, it displays "Expired" in the element and stops the countdown.
 * - Reloads the page shortly after the countdown ends.
 * - Updates the countdown every second using `setInterval`.
 *
 * @example
 * const countdownElement = document.getElementById('countdown');
 * startCountdown('2023-09-30T12:00:00Z', countdownElement); // Starts the countdown and updates the element
 */
export function startCountdown(endsAt, element) {
  const endDate = new Date(endsAt);

  function updateCountDown() {
    const now = new Date();
    const diff = endDate - now;
    let countdownInterval;

    if (diff <= 0) {
      element.textContent = "Expired";
      clearInterval(countdownInterval);
      return;
    }

    const secondsLeft = Math.floor((diff / 1000) % 60);
    const minutesLeft = Math.floor((diff / (1000 * 60)) % 60);
    const hoursLeft = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

    let displayText = ``;

    if (daysLeft > 0) {
      displayText += `${daysLeft}d`;
    }

    if (hoursLeft > 0 || daysLeft > 0) {
      displayText += ` ${hoursLeft}h`;
    }

    if (minutesLeft > 0 || hoursLeft > 0 || daysLeft > 0) {
      displayText += ` ${minutesLeft}m`;
    }

    displayText += ` ${secondsLeft}s`;

    element.textContent = displayText.trim();

    if (diff <= 1000) {
      clearInterval(countdownInterval);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  updateCountDown();

  const countdownInterval = setInterval(updateCountDown, 1000);
}
