export function findCorrectListing(data) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  console.log(id);

  const matchingListing = data.find(function (object) {
    return object.id.toString() === id;
  });
  console.log(matchingListing);
  return matchingListing;
}
