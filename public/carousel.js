function setupCarousel(screenshots) {
  let idx = 0;
  const image = document.getElementById('carousel-image');
  const dots = document.querySelectorAll('#carousel-dots button');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  function update() {
    image.src = screenshots[idx];
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-primary', i === idx);
    });
  }

  prevBtn.onclick = () => {
    idx = (idx - 1 + screenshots.length) % screenshots.length;
    update();
  };

  nextBtn.onclick = () => {
    idx = (idx + 1) % screenshots.length;
    update();
  };

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      idx = i;
      update();
    };
  });

  update();
}

window.setupCarousel = setupCarousel;
