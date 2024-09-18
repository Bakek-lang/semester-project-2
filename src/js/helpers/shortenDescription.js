export function shortenDescription(description) {
  if (description.length > 40) {
    return description.substring(0, 40) + "...";
  }
  return description;
}
