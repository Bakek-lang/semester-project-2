import { closeModal, openModal } from "../modal/modal";

export function modalListeners() {
  const createListingButton = document.getElementById("create-listing-button");

  createListingButton.addEventListener("click", () => {
    openModal();
  });

  const closeModalButton = document.getElementById("close-modal");

  console.log(closeModalButton);

  closeModalButton.addEventListener("click", () => {
    closeModal();
  });
}
