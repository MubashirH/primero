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


$(document).ready( function() {
    //menu initiatlization
    var hamburger = $('.hamburger');
    hamburger.click(function () {
        var classes = $('#menu').attr('class');
        if ( classes === 'hamburger hamburger--spin is-active') {
            $('.menu ul').css({'animation-name':'slide-out'});
            $('.hamburger').css({'border-top-right-radius':'5px', 'border-bottom-right-radius':'5px'});
            setTimeout( function() {
                $('.menu ul').css({'display':'none'});
            }, 1000);
        }
        else {
            $('.menu ul').css({'display':'flex','animation-name':'slide-in'});
            $('.hamburger').css({'border-top-right-radius':'0px', 'border-bottom-right-radius':'0px'});
        }
        hamburger.toggleClass('is-active');
        return false;
    });


    //client slider
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