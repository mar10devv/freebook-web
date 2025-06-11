// public/fadein.js
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fadein');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target); // Solo anima una vez
        }
      });
    }, {
      threshold: 0.3
    });
  
    elements.forEach(el => observer.observe(el));
  });
  