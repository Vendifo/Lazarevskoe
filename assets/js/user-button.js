document.addEventListener('DOMContentLoaded', function () {
    var userButton = document.querySelector('.nav__user-button');
    var authenticationBlock = document.querySelector('.nav__authentication');
    var authFunc = document.querySelector('.nav__func');

    // Обработчик для кнопки пользователя
    userButton.addEventListener('click', function (event) {
        authenticationBlock.classList.toggle('show');
        // Остановка всплытия события, чтобы клик на кнопке пользователя не вызывал обработчик событий для весь документ
        event.stopPropagation();
    });

    // Обработчик для всего документа
    document.addEventListener('click', function (event) {
        // Проверяем, был ли клик вне блока аутентификации
        if (!authFunc.contains(event.target) && !userButton.contains(event.target)) {
            // Если да, то скрываем блок аутентификации
            authenticationBlock.classList.remove('show');
        }
    });
});