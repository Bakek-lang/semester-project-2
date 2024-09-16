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

    element.textContent = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  }

  updateCountDown();

  const countdownInterval = setInterval(updateCountDown, 1000);
}
