

$(document).ready(function () {
    if ($(window).width() < 1200) {
        var headerHeight = $('.header').outerHeight(); // Получаем высоту заголовка
        var prevScrollPos = window.scrollY;

        $('#burger').on('click', function () {
            $('#menu').slideToggle(250, function () {
                $('.nav').toggleClass('position-fix');
                $(this).toggleClass('flex-display');
                $('.header').toggleClass('header-fix');
                $('.main').toggleClass('mob-fix');


                if ($('#menu').hasClass('flex-display')) {
                    $(window).off('scroll');
                } else {
                    $(window).on('scroll', scrollHandler);
                }
            });
        });

        // Функция  скролла
        function scrollHandler() {
            var currentScrollPos = window.scrollY;

            if (currentScrollPos >= headerHeight * 1.5) {
                if (prevScrollPos > currentScrollPos) {
                    $('.nav-head').slideDown('fast');
                } else {
                    $('.nav-head').slideUp('fast');
                }
            }

            // Обновляем предыдущее значение прокрутки
            prevScrollPos = currentScrollPos;
        }

        // Добавляем обработчик сразу после загрузки страницы, чтобы проверить начальную позицию
        $(window).on('scroll', scrollHandler);
    }

});
