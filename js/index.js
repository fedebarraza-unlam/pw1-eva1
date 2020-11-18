$(document).ready(function () {
    $('.hero-carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="arrow left" src="img/hero/chevron-left-solid.svg" alt="Left Arrow">',
        nextArrow: '<img class="arrow right" src="img/hero/chevron-right-solid.svg" alt="Right Arrow">'
    });
});