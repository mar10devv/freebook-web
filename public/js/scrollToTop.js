// public/js/scrollToTop.js

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btn.classList.remove("hidden");
        btn.style.opacity = "1";
      } else {
        btn.style.opacity = "0";
        setTimeout(() => btn.classList.add("hidden"), 300);
      }
    });
  
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  