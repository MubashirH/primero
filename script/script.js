$(window).scroll( function() {
    var white = $('.white');
    var product = $('.product').offset();
    var window = $(this).scrollTop();
    if ( window > 2000 && window < product.top) {
        $('body').css('background-image','url("images/services/CrewBG3.jpg")');
    } 
    else if( window > product.top) {
        $('body').css('background-image','url("images/back.png")');
    }
    else if( window < 2000) {
        $('body').css('background-image','url("images/services/SprayBG2.jpg")');
    }
});


$(document).read( function() {
    var clientSwiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        autoPlay: {
            delay: 500,
            disableOnInteraction: true
        }
    })
});