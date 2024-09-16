export function openModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

export function closeModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("hidden");
  document.body.classList.remove("overflow-hidden");
}
