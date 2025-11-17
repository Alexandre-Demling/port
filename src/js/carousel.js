// src/js/carousel.js

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector('[data-carousel="projects"]');
  if (!section) return;

  const slides = Array.from(section.querySelectorAll("[data-carousel-slide]"));
  const texts = Array.from(section.querySelectorAll("[data-carousel-text]"));
  const prevBtn = section.querySelector("[data-carousel-prev]");
  const nextBtn = section.querySelector("[data-carousel-next]");

  if (!slides.length || !texts.length) return;

  let current = 0;
  let autoplayId;

  const show = (index) => {
    const max = slides.length;
    current = (index + max) % max;

    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== current);
    });

    texts.forEach((text, i) => {
      text.classList.toggle("hidden", i !== current);
    });
  };

  const startAutoplay = () => {
    clearInterval(autoplayId);
    autoplayId = setInterval(() => {
      show(current + 1);
    }, 6000); // 6 secondes
  };

  prevBtn?.addEventListener("click", () => {
    show(current - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener("click", () => {
    show(current + 1);
    startAutoplay();
  });

  show(0);
  startAutoplay();
});