export function renderUserMenu(profile) {
  console.log("renderMenu");
  console.log("profile", profile);
  const profileImage = document.querySelector("[data-profile='user-image']");

  profileImage.src = profile.avatar.url;
  profileImage.alt = profile.avatar.alt;

  console.log("no problem");

  const profileName = document.querySelector("[data-profile='user-name']");

  profileName.textContent = profile.name;

  const profileEmail = document.querySelector("[data-profile='user-email']");

  profileEmail.textContent = profile.email;

  const profileCredits = document.querySelector(
    "[data-profile='user-credits']"
  );

  profileCredits.textContent = profile.credits;

  const profileWins = document.querySelector("[data-profile='user-wins']");

  profileWins.textContent = profile._count.wins;
}
