// Získání všech obrázků
const images = document.querySelectorAll('.project-image');
let currentIndex = 0;

// Získání tlačítek
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Funkce na zobrazení obrázku podle indexu
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active'); // Skryje všechny obrázky
    });
    images[index].classList.add('active'); // Zobrazí obrázek s daným indexem
}

// Přepnutí na předchozí obrázek
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cyklování zpět
    showImage(currentIndex);
});

// Přepnutí na další obrázek
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Cyklování dopředu
    showImage(currentIndex);
});

// Zobraz první obrázek na začátku
showImage(currentIndex);
