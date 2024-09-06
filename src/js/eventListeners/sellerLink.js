export function addSellerLinkClickListener(sellerLink) {
  sellerLink.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}
