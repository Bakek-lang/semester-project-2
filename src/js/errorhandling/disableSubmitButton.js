export function disableSubmitButton(button) {
  button.disabled = true;
  button.classList.add("opacity-50", "cursor-not-allowed");
}
