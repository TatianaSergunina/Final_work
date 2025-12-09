document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Enable touch swiping
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
    });
});