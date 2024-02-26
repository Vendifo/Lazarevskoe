$(document).ready(function () {
    $('.choice__list').slick({

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,

        responsive: [
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 1199,
                settings : {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 9999,
                settings : { 
                    slidesToShow: 4,
                    dots: false,
                    arrows: true,
                }
            }

        ]
    });

    $('.eat__list').slick({

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,

        responsive: [
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 1199,
                settings : {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 9999,
                settings : { 
                    slidesToShow: 4,
                    dots: false,
                    arrows: true,
                }
            }

        ]
    });

    
});