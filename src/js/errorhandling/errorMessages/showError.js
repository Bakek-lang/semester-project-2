export function showError(inputElement, message) {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("text-red-700");
  errorMessage.textContent = message;
  inputElement.after(errorMessage);
}
