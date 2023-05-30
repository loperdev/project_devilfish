// Tournament Slider 
// Tournament Slider 
// Tournament Slider 
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        nav: false,

        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
            1300: {
                items: 6,
            },
            1400: {
                items: 7,
            }
        }
    });
});