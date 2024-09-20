export function openModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

export function closeModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}
