export function hamburgerMenuToggle() {
  const menuButton = document.querySelector(
    "[data-collapse-toggle='navbar-user']"
  );
  const menu = document.getElementById("navbar-user");
  const icon = menuButton.querySelector("i");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");

    if (menu.classList.contains("hidden")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  });
}
