document.addEventListener('DOMContentLoaded', function() {
    // Získáme všechny obrázky v galerii
    const images = document.querySelectorAll('.project-image');
    // Získáme tlačítka 'next' a 'prev'
    const nextButton = document.getElementById('next-btn'); // Opraveno na správné ID
    const prevButton = document.getElementById('prev-btn'); // Opraveno na správné ID

    // Nastavíme index aktuálního obrázku
    let currentImageIndex = 0;

    // Funkce pro zobrazení dalšího obrázku
    function showNextImage() {
        images[currentImageIndex].classList.remove('active'); // Skryje aktuální obrázek
        currentImageIndex = (currentImageIndex + 1) % images.length; // Zvyšuje index a pokud je na posledním obrázku, začne znovu od začátku
        images[currentImageIndex].classList.add('active'); // Zobrazí nový obrázek
    }

    // Funkce pro zobrazení předchozího obrázku
    function showPrevImage() {
        images[currentImageIndex].classList.remove('active'); // Skryje aktuální obrázek
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Sníží index a pokud je na prvním obrázku, přejde na poslední
        images[currentImageIndex].classList.add('active'); // Zobrazí nový obrázek
    }

    // Události kliknutí na tlačítka
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Na začátku zobrazí první obrázek
    images[currentImageIndex].classList.add('active');
});

// KONEC PRVNÍ SEKCE

const galleryWrapper = document.querySelector('.gallery-wrapper');
const arrowRight = document.querySelector('.arrow-right');

// Funkce pro posun galerie doprava při kliknutí na šipku
arrowRight.addEventListener('click', () => {
  galleryWrapper.scrollBy({
    left: 300, // Posun doprava o 300px
    behavior: 'smooth',
  });
});

// Podpora pro posouvání dotykem (drag-to-scroll)
let isDown = false;
let startX;
let scrollLeft;

galleryWrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  galleryWrapper.classList.add('active');
  startX = e.pageX - galleryWrapper.offsetLeft;
  scrollLeft = galleryWrapper.scrollLeft;
});

galleryWrapper.addEventListener('mouseleave', () => {
  isDown = false;
  galleryWrapper.classList.remove('active');
});

galleryWrapper.addEventListener('mouseup', () => {
  isDown = false;
  galleryWrapper.classList.remove('active');
});

galleryWrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - galleryWrapper.offsetLeft;
  const walk = (x - startX) * 2; // Posunový efekt (větší hodnota znamená rychlejší posun)
  galleryWrapper.scrollLeft = scrollLeft - walk;
});
