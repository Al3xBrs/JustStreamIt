function carouselbestMovies() {
    const items = document.querySelector('.carousel-items-bestMovies');
    const prevBtn = document.querySelector('.carousel-prev-bestMovies');
    const nextBtn = document.querySelector('.carousel-next-bestMovies');
    let currentItem = 0;

    nextBtn.addEventListener('click', () => {
        if (currentItem < 3) {
            currentItem++;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentItem > 0) {
            currentItem--;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

}

function carouselscifiMovies() {
    const items = document.querySelector('.carousel-items-scifiMovies');
    const prevBtn = document.querySelector('.carousel-prev-scifiMovies');
    const nextBtn = document.querySelector('.carousel-next-scifiMovies');
    let currentItem = 0;

    nextBtn.addEventListener('click', () => {
        if (currentItem < 3) {
            currentItem++;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentItem > 0) {
            currentItem--;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

}

function carouselactionMovies() {
    const items = document.querySelector('.carousel-items-actionMovies');
    const prevBtn = document.querySelector('.carousel-prev-actionMovies');
    const nextBtn = document.querySelector('.carousel-next-actionMovies');
    let currentItem = 0;

    nextBtn.addEventListener('click', () => {
        if (currentItem < 3) {
            currentItem++;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentItem > 0) {
            currentItem--;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

}

function carouseladventureMovies() {
    const items = document.querySelector('.carousel-items-adventureMovies');
    const prevBtn = document.querySelector('.carousel-prev-adventureMovies');
    const nextBtn = document.querySelector('.carousel-next-adventureMovies');
    let currentItem = 0;

    nextBtn.addEventListener('click', () => {
        if (currentItem < 3) {
            currentItem++;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentItem > 0) {
            currentItem--;
            items.style.transform = `translateX(-${currentItem * 25}%)`;
        }
    });

}

document.addEventListener("DOMContentLoaded", carouselbestMovies)
document.addEventListener("DOMContentLoaded", carouselscifiMovies)
document.addEventListener("DOMContentLoaded", carouselactionMovies)
document.addEventListener("DOMContentLoaded", carouseladventureMovies)