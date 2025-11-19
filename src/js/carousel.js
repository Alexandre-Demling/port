// public/js/carousel.js

function initProjectsCarousel() {
  const section = document.querySelector('[data-carousel="projects"]');
  if (!section) return;

  const slides = Array.from(section.querySelectorAll("[data-carousel-slide]"));
  const texts = Array.from(section.querySelectorAll("[data-carousel-text]"));
  const prevBtn = section.querySelector("[data-carousel-prev]");
  const nextBtn = section.querySelector("[data-carousel-next]");

  if (!slides.length || !texts.length) return;

  let current = 0;
  let autoplayId = null;

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
    if (autoplayId) clearInterval(autoplayId);
    autoplayId = setInterval(() => {
      show(current + 1);
    }, 6000); // 6s
  };

  prevBtn?.addEventListener("click", () => {
    show(current - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener("click", () => {
    show(current + 1);
    startAutoplay();
  });

  // lancement initial
  show(0);
  startAutoplay();
}

// 🔁 Compatible avec tous les timings de chargement
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjectsCarousel);
} else {
  // DOM déjà prêt (cas fréquent avec <script type="module" en bas de page)
  initProjectsCarousel();
}
