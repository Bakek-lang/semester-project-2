export function shortenDescription(description) {
  if (description.length > 35) {
    return description.substring(0, 35) + "...";
  }
  return description;
}
