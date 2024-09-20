export function handleError(isValid, errorDivId, message) {
  const errorDiv = document.getElementById(errorDivId);
  if (!isValid) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
  } else {
    errorDiv.classList.add("hidden");
  }
}
