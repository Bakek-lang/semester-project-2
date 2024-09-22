/**
 * Checks if the bid amount is higher than the current highest bid.
 *
 * This function compares the bid amount with the current highest bid to determine if the new bid exceeds the highest bid.
 *
 * @function checkHighestBid
 *
 * @param {number} bidAmount - The amount of the new bid.
 * @param {number} currentHighestBid - The current highest bid amount.
 *
 * @returns {boolean} Returns `true` if the new bid is higher than the current highest bid, otherwise `false`.
 *
 * @example
 * const isHighest = checkHighestBid(200, 150);
 * console.log(isHighest); // Outputs: true (the new bid is higher)
 */
export function checkHighestBid(bidAmount, currentHighestBid) {
  return bidAmount > currentHighestBid;
}
