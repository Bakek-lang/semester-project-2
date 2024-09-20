export function clearErrors() {
  const errorMessages = document.querySelectorAll(".text-red-700");
  errorMessages.forEach((error) => error.remove());
}
