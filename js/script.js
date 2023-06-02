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


// Team Section
// Team Section
// Team Section 
const unlockTeamOne = document.getElementById('unlockTeamOne');
const displayTeamOne = document.getElementById('displayTeamOne');

unlockTeamOne.addEventListener('click', () => {
    if (displayTeamOne.style.display === 'none') {
        displayTeamOne.style.display = 'block';
        setTimeout(() => {
            displayTeamOne.style.opacity = '1';
        }, 30);
        unlockTeamOne.style.display = 'none';
    }
});

const unlockTeamTwo = document.getElementById('unlockTeamTwo');
const displayTeamTwo = document.getElementById('displayTeamTwo');

unlockTeamTwo.addEventListener('click', () => {
    if (displayTeamTwo.style.display === 'none') {
        displayTeamTwo.style.display = 'block';
        setTimeout(() => {
            displayTeamTwo.style.opacity = '1';
        }, 30);
        unlockTeamTwo.style.display = 'none';
    }
});
