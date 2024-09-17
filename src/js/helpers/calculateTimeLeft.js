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
