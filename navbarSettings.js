const toggleMenuIcon = document.querySelector(".menu-icon");
const overlayBackdrop = document.querySelector(".backdrop");
const navigationLinks = document.querySelector(".navlinks");
const closeMenuIcon = document.querySelector(".close-icon");

toggleMenuIcon.addEventListener("click", () => {
  overlayBackdrop.classList.add("active");
  navigationLinks.classList.add("active");
});

closeMenuIcon.addEventListener("click", () => {
  overlayBackdrop.classList.remove("active");
  navigationLinks.classList.remove("active");
});

overlayBackdrop.addEventListener("click", () => {
  overlayBackdrop.classList.remove("active");
  navigationLinks.classList.remove("active");
});
