
$(document).ready( function() {
    var hamburger = $('.hamburger');
    //menu initiatlization
    if ($(window).scrollTop() > 150) { 
        $('.menu').css({'position':'fixed','left':'10px','top':'10px'});
        $('.hamburger').css('display','flex');
        $('.no-burger').css('display','none');
    }

    var weHeight = $('.box').width();
    $('.box .section').css('height',weHeight);


    hamburger.click(function () {
        var classes = $('#menu').attr('class');
        if ( classes === 'hamburger hamburger--spin is-active') {
            $('.menu .with-burger').css({'animation-name':'slide-out'});
            $('.hamburger').css({'border-bottom-right-radius':'5px', 'border-bottom-left-radius':'5px'});
            setTimeout( function() {
                $('.menu .with-burger').css({'display':'none'});
            }, 1000);
        }
        else {
            $('.menu').css({'display':'block'});
            $('.menu .with-burger').css({'display':'inline-block','animation-name':'slide-in'});
            $('.hamburger').css({'border-bottom-left-radius':'0px', 'border-bottom-right-radius':'0px'});
        }
        hamburger.toggleClass('is-active');
        return false;
    });

    $('.menu ul li').click( function() { menuClose(); })


    function menuClose() {
        $('.menu ul').css({'animation-name':'slide-out'});
        $('.hamburger').css({'border-bottom-left-radius':'5px', 'border-bottom-right-radius':'5px'});
        setTimeout( function() {
            $('.menu .with-burger').css({'display':'none'});
        }, 1000);
        hamburger.toggleClass('is-active');
    }


    //client slider
    var clientSwiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        autoPlay: {
            delay: 200,
            disableOnInteraction: true
        },
        virtualtranslate: true
    })


    $(window).scroll( function() {
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
    
        
        if ( $('#menu').attr('class') === 'hamburger hamburger--spin is-active') { menuClose(); }
    
        if ( window > 150) {
            $('.menu').css({'position':'fixed','left':'10px','top':'10px'});
            $('.hamburger').css('display','flex');
            $('.no-burger').css('display','none');
        } else {
            $('.with-burger').css('display','none');
            $('.hamburger').css('display','none');
            $('.no-burger').css('display','flex');
            $('.menu').css({'position':'relative','left':'0','top':'0'});
        }
    });

    if ($(window).width() < 768) {
        var height = $('.services .img').width();
        $('.services .img').css('height',height/1.5);
    }
});

$(window).resize( function() {
    if ($(window).width() < 768) {
        console.log(1)
        var height = $('.service .img').width();
        $('.services .img').css('height',height);
    }
});