export function isExpired(endsAt) {
  const now = new Date();
  const endDate = new Date(endsAt);
  return now >= endDate;
}
