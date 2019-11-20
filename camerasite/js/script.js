

$(document).ready(function() {
    $(window).scroll( function(){
        $('.controlstitle, .aperture, .shutter, .iso, .meter, .histo, .expo, .shoot-img, .meter-img, .histo-img, .cameraworks, .works-info, .diagram, .reverse-info, .reversetitle ').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }

        });
    });
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#intro').stop().animate(
        {opacity: (( 180-scroll )/100)+2},
        "slow"
    );
});
