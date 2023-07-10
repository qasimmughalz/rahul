$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 115) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("sticky_header");
    } else {
        $("header").removeClass("sticky_header");
    }
});

AOS.init();


// jQuery
$(document).ready(function() {
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active'); // Remove active class from all nav-links
        $(this).addClass('active'); // Add active class to the clicked nav-link
    });
});
