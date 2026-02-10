document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelectorAll(".nav-menu a");

  if (!menuBtn || navLinks.length === 0) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.checked = false;
    });
  });
});
