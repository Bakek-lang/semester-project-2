/**
 * Listens for input on the bid field and ensures only numeric values are entered.
 *
 * This function attaches an input event listener to the bid input field. It filters out any non-numeric characters, allowing only numbers to be entered in the field.
 *
 * @function bidInputListener
 *
 * @returns {void} This function does not return a value, but it modifies the input field's value in real-time.
 *
 * @description
 * - Attaches an event listener to the bid input field (`#bid-input`).
 * - During the input event, it filters the entered value to allow only numeric characters.
 * - Replaces any non-numeric characters with an empty string.
 *
 * @example
 * bidInputListener(); // Sets up the listener on the bid input field
 */
export function bidInputListener() {
  const bidInput = document.getElementById("bid-input");

  bidInput.addEventListener("input", function (event) {
    const value = event.target.value;

    event.target.value = value.replace(/[^0-9]/g, "");
  });
}
