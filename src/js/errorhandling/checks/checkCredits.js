/**
 * Checks if the user has enough credits to place a bid.
 *
 * This function compares the bid amount with the user's available credits to determine if the user can afford to place the bid.
 *
 * @function checkCredits
 *
 * @param {number} bidAmount - The amount of credits required for the bid.
 * @param {number} userCredits - The number of credits the user currently has.
 *
 * @returns {boolean} Returns `true` if the user has enough credits to place the bid, otherwise `false`.
 *
 * @example
 * const canBid = checkCredits(100, 150);
 * console.log(canBid); // Outputs: true (the user has enough credits)
 */
export function checkCredits(bidAmount, userCredits) {
  return bidAmount <= userCredits;
}
