$(document).ready(function() {
    var armorButton = $('#armor');
    var armorMenu = $('.armor');
    var blurBackground = $('.blur-armor');
    var closeArmorButton = $('#closeArmor');

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
});