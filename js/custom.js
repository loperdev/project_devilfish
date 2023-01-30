$(document).ready(function () {

    document.body.style.zoom="90%";
    /* **** scrollIt ***** */
    $(function () {
        $.scrollIt({
            upKey: 38,
            downKey: 40,
            easing: "linear",
            scrollTime: 600,
            activeClass: "active",
            onPageChange: null,
            topOffset: -80,
        });
    });
    /* **** End scrollIt ***** */



    /* **** Navigation Toggle Start **** */
    $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    /* **** Navigation Toggle End **** */



    /* **** sticky **** */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header").addClass("nav-new");
        } else {
            $("header").removeClass("nav-new");
        }
    });
    /* **** sticky **** */



    /* **** AOS **** */
    AOS.init({
        duration: 1000,
    });
    /* **** End AOS **** */

    // Detect if device is mobile
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  // Remove data-aos attributes from elements
  var elements = document.querySelectorAll("[data-aos]");
  elements.forEach(function(element) {
    element.removeAttribute("data-aos");
  });
} else {
  // Initialize AOS library on desktop devices
  AOS.init();
}

});
