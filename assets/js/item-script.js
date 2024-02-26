document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.card-navigation__list img');
    const mainImage = document.querySelector('.card-navigation__details-img');
    const counter = document.getElementById('counter');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            mainImage.src = image.src;
            currentIndex = index;
            updateCounter();
        });
    });

    function updateCounter() {
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentIndex].src;
        updateCounter();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        mainImage.src = images[currentIndex].src;
        updateCounter();
    });

    
});