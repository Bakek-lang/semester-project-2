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
    element.textContent = `${minutes}m ${seconds % 60}s ago`;
  } else {
    element.textContent = `${seconds}s ago`;
  }

  if (hours === 0) {
    setInterval(() => {
      updateTimeAgo(isoDate, element);
    }, 1000);
  }
}
