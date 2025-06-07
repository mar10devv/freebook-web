// public/js/contactModal.js
document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("navbarContactBtn");
    const contactBtnMobile = document.getElementById("navbarContactBtnMobile");
    const contactModal = document.getElementById("contactModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
  
    function openModal(e) {
      if (e) e.preventDefault();
      contactModal.classList.remove("opacity-0", "pointer-events-none");
      contactModal.classList.add("opacity-100");
    }
  
    if (contactBtn) contactBtn.addEventListener("click", openModal);
    if (contactBtnMobile) contactBtnMobile.addEventListener("click", openModal);
  
    if (closeModalBtn) closeModalBtn.addEventListener("click", () => {
      contactModal.classList.add("opacity-0", "pointer-events-none");
      contactModal.classList.remove("opacity-100");
    });
  
    // Cerrar modal al hacer click fuera del contenido
    if (contactModal) {
      contactModal.addEventListener("click", (e) => {
        if (e.target === contactModal) {
          contactModal.classList.add("opacity-0", "pointer-events-none");
          contactModal.classList.remove("opacity-100");
        }
      });
    }
  });
  