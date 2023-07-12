// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     //>=, not <=
//     if (scroll >= 115) {
//         //clearHeader, not clearheader - caps H
//         $("header").addClass("sticky_header");
//     } else {
//         $("header").removeClass("sticky_header");
//     }
// });

AOS.init();


// jQuery
$(document).ready(function() {
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active'); // Remove active class from all nav-links
        $(this).addClass('active'); // Add active class to the clicked nav-link
        $('.navbar-collapse').removeClass('show');
    });
});



jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1170: {
            items: 1
          }
        }
    });
});



(function () {
    function id(v) {
        return document.getElementById(v);
    }

    function loadbar() {
        let ovrl = id('overlay1'),
            ovrl2 = id('overlay2'),
            olog = id('status'),
            img = document.images,
            c = 0;
        tot = img.length;

        function imgLoaded() {
            c += 1;

            const opac = ((100 / tot * c) << 0) / 100;
            olog.style.opacity = opac;

            if (c === tot) {
                return doneLoading();
            }
        }

        function doneLoading() {

            ovrl.classList.add("white-overlay");
            ovrl2.classList.add("white-overlay2");

        }

        for (let i = 0; i < tot; i++) {
            const tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());