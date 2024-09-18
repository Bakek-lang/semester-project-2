export function sortListingsByExpiration(listingsArray) {
  return listingsArray.sort((a, b) => {
    const now = new Date();

    const isAExpired = new Date(a.endsAt) < now;
    const isBExpired = new Date(b.endsAt) < now;

    if (!isAExpired && !isBExpired) {
      return new Date(a.endsAt) - new Date(b.endsAt);
    }

    if (isAExpired && !isBExpired) {
      return 1;
    }

    if (!isAExpired && isBExpired) {
      return -1;
    }

    return new Date(b.endsAt) - new Date(a.endsAt);
  });
}
