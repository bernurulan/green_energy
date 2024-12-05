const accordeons = document.querySelectorAll('.accordeon__top');

accordeons.forEach(a => {
    a.addEventListener('click', () => {
        const text = a.nextElementSibling; // Get the adjacent .item__text
        if (text) {
            text.classList.toggle('hidden'); // Toggle the 'hidden' class
        }
    })
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const aboutSlider = new Swiper('.about__slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
});

const testimonialSlider = new Swiper('.testimonials__swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


