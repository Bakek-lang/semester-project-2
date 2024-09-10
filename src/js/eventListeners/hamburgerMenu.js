export function hamburgerMenuToggle() {
  const menuButton = document.querySelector(
    "[data-dropdown-toggle='profile-dropdown']"
  );
  const menu = document.getElementById("profile-dropdown");
  const icon = menuButton.querySelector("i");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
}
