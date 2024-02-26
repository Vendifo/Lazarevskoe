$(document).ready(function() {
    $('.choice-item #choice-like').on('click', function() {
        $(this).attr('src', './assets/image/like-choice.svg');
        var over = $('<div class="overlay"></div>').hide();
        var message = $('<div class="message">Вы удалили объект из избранного</div>').hide();
        var returnButton = $('<button class="returnButton">Вернуть</button>').hide();
        message.append(returnButton);
        $(this).closest('.choice-item').append(over);
        $(this).closest('.choice-item').append(message);
        over.fadeIn();
        message.slideDown();
        returnButton.slideDown();
    });

    $(document).on('click', '.returnButton', function() {
        $(this).closest('.choice-item').find('#choice-like').attr('src', './assets/image/heart-full.svg');
        $(this).closest('.choice-item').find('.message').slideUp(function() {
            $(this).remove();
        });
        $(this).closest('.choice-item').find('.overlay').fadeOut(function() {
            $(this).remove();
        });
    });
});