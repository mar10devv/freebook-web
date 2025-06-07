// public/js/navbarHideOnScroll.js

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNavbar");
    let lastScroll = window.scrollY;
  
    window.addEventListener("scroll", function () {
      const currentScroll = window.scrollY;
      if (!navbar) return;
  
      if (currentScroll <= 0) {
        // Siempre mostrar arriba de todo
        navbar.style.transform = "translateY(0)";
        return;
      }
      if (currentScroll > lastScroll) {
        // Bajando: ocultar navbar
        navbar.style.transform = "translateY(-100%)";
      } else {
        // Subiendo: mostrar navbar
        navbar.style.transform = "translateY(0)";
      }
      lastScroll = currentScroll;
    });
  });
  