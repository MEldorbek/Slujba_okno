$(document).ready(function () {
    $('.section-one__slider .slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.section-one__slider .slider__dots',
        autoplay: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: true,
            }
        }, ]
    });
    $('.section-one__slider .slider__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        focusOnSelect: true,
        asNavFor: '.section-one__slider .slider__inner',
        dots: false,
        arrows: false,
    });
    $('.section-two__slider .slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.section-two__slider .slider__dots',
        autoplay: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: true,
            }
        }, ]
    });
    $('.section-two__slider .slider__dots').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        focusOnSelect: true,
        asNavFor: '.section-two__slider .slider__inner',
        dots: false,
        arrows: false,
    });

    $('.photo__inner').slick({
        arrows: true,
        dots: true,
    });
    $('.about__img').slick({
        arrows: true,
    });
    $('.menu__btn').on('click', function () {
        $('.header__info').slideToggle();
        $('.header__menu').slideToggle();
        $('.header__info').toggleClass("active");
        $('.menu__btn').toggleClass("active");
    });
});