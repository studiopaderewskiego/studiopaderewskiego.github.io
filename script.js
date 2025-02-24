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
});

document.addEventListener('DOMContentLoaded', function () {
    let currentIndexNew = 0;
    const imagesNew = document.querySelectorAll('.new-gallery-image');
    const prevButtonNew = document.getElementById('prev-btn-new');
    const nextButtonNew = document.getElementById('next-btn-new');

    function showImageNew(index) {
        // Skrytí všech obrázků
        imagesNew.forEach(img => img.classList.remove('active'));
        
        // Zobrazení obrázku podle aktuálního indexu
        imagesNew[index].classList.add('active');
    }

    // Funkce pro přechod na předchozí obrázek
    prevButtonNew.addEventListener('click', function () {
        currentIndexNew = (currentIndexNew === 0) ? imagesNew.length - 1 : currentIndexNew - 1;
        showImageNew(currentIndexNew);
    });

    // Funkce pro přechod na další obrázek
    nextButtonNew.addEventListener('click', function () {
        currentIndexNew = (currentIndexNew === imagesNew.length - 1) ? 0 : currentIndexNew + 1;
        showImageNew(currentIndexNew);
    });

    // Inicializace zobrazení prvního obrázku
    showImageNew(currentIndexNew);
});
