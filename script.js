// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark mode toggle
let dark = false;
const toggle = () => {
  dark = !dark;
  document.body.style.filter = dark ? 'invert(1) hue-rotate(180deg)' : 'none';
};
// Expose toggle globally for a future UI button
window.toggle = toggle;

// Carousel arrow navigation
const track = document.querySelector('.carousel-track');
if (track) {
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const scrollAmount = 360; // card width + gap

  prevBtn?.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}
