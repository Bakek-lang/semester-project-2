/**
 * Adds a click event listener to a card element to navigate to the post's detail page.
 *
 * This function attaches a click event listener to a card element. When the card is clicked, it redirects the user to the post's detail page using the provided post ID.
 *
 * @function addCardClickListener
 *
 * @param {HTMLElement} card - The card element that listens for the click event.
 * @param {string|number} postId - The unique identifier of the post, used to navigate to the post's detail page.
 *
 * @returns {void} This function does not return a value, but it triggers a navigation to the post detail page.
 *
 * @description
 * - Attaches a click event listener to the specified card element.
 * - On click, the function navigates the user to the post detail page (`/post/?id={postId}`) using the post's unique ID.
 *
 * @example
 * const card = document.getElementById('post-card');
 * addCardClickListener(card, 12345); // Redirects to `/post/?id=12345` when the card is clicked
 */
export function addCardClickListener(card, postId) {
  card.addEventListener("click", () => {
    window.location.href = `/post/?id=${postId}`;
  });
}
