$(document).ready(function() {
    var armorButton = $('#create__rev');
    var armorMenu = $('.rev__create');
    var blurBackground = $('.blur-armor');
    var closeArmorButton = $('.rev__close');

    // Обработчик нажатия на кнопку "Забронировать"
    armorButton.on('click', function() {
        armorMenu.slideDown();
        blurBackground.fadeIn();
    });

    // Обработчик нажатия на кнопку закрытия окна бронирования
    closeArmorButton.on('click', function() {
        armorMenu.slideUp();
        blurBackground.fadeOut();
    });

    var $stars = $('.rev__create__stars img');
    
    $stars.hover(function() {
        if (!$(this).hasClass('clicked')) {
            // При наведении меняем все предыдущие пустые звезды на заполненные
            $(this).prevAll('img[src="./assets/image/star-empty.svg"]').attr('src', './assets/image/star.svg');
            // Меняем текущую звезду и все следующие на пустые
            $(this).attr('src', './assets/image/star.svg');
            $(this).nextAll('img').attr('src', './assets/image/star-empty.svg');
        }
    }, function() {
        if (!$(this).hasClass('clicked')) {
            // При уходе курсора возвращаем всем звездам исходные изображения
            $stars.attr('src', './assets/image/star-empty.svg');
            // Заменяем заполненные звезды на заполненные только до последней активной
            $stars.filter('img[src="./assets/image/star.svg"]').prevAll('img').attr('src', './assets/image/star.svg');
        }
    });
    
    $stars.click(function() {
        var currentIndex = $stars.index(this);

        $(this).addClass('clicked').siblings().removeClass('clicked');
        
        $stars.slice(0, currentIndex + 1).attr('src', './assets/image/star.svg');
        $stars.slice(currentIndex + 1).attr('src', './assets/image/star-empty.svg');
    });
});