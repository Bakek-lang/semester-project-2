export function findCorrectListing(data) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const matchingListing = data.find(function (object) {
    return object.id.toString() === id;
  });
  return matchingListing;
}
