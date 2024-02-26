$(document).ready(function(){
    $('.feedback__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        centerMode : true,
        
        responsive : [
            { 
                breakpoint : 1199,
                settings : { 
                    arrows : false ,
                    dots : true,
                    slidesToShow: 1,
                    centerPadding : "50px 30px 0px ",
                }
            },
            { 
                breakpoint : 9999,
                settings : {
                    arrows : true,
                    dots: false,
                    slidesToShow: 3,
                    centerPadding : "0px",
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if ($(window).width() > 1200) {
            $('.feedback-center-decor').fadeOut(0);
        }
    }).on('afterChange', function(event, slick, currentSlide) {
        if ($(window).width() > 1200) {
            $('.feedback-center-decor').hide().slideDown(200);
        }
        
    });
});