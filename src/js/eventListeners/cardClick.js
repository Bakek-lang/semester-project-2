export function addCardClickListener(card, postId) {
  card.addEventListener("click", () => {
    window.location.href = `/post/?id=${postId}`;
  });
}
