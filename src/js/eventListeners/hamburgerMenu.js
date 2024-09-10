export function hamburgerMenuToggle() {
  const menuButton = document.querySelector(
    "[data-dropdown-toggle='profile-dropdown']"
  );
  const menu = document.getElementById("profile-dropdown");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
}
