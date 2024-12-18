function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarousel() {
        const translateX = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    nextBtn.addEventListener('click', showNextItem);
    prevBtn.addEventListener('click', showPrevItem);

    setInterval(showNextItem, 5000); // Change d'élément toutes les 5 secondes
});

// Leaflet Map Initialization
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([13.87164,-13.34667], 10); // Replace with your coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([13.76840,-13.66851]).addTo(map) // Replace with your coordinates
        .bindPopup('TTC')
        .openPopup();
});

// Form Submission Animation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulate form submission success
    setTimeout(function () {
        const formMessage = document.getElementById('formMessage');
        formMessage.innerText = 'Message envoyé avec succès!';
        formMessage.style.opacity = '1';

        // Reset the form
        document.getElementById('contactForm').reset();

        // Hide the message after 3 seconds
        setTimeout(function () {
            formMessage.style.opacity = '0';
        }, 3000);
    }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    // Affiche le popup après un délai (1 seconde ici)
    setTimeout(() => {
        document.getElementById("event-popup").classList.add("show");
    }, 1000);
});

function closePopup() {
    document.getElementById("event-popup").classList.remove("show");
}
