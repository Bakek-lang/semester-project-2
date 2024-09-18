import { load } from "../localstorage/load";
import { save } from "../localstorage/save";

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
