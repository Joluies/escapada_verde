const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
  hamburger.classList.toggle("active"); // activa transformación en X
  navLinks.classList.toggle("active");  // muestra/oculta menú
});