$(document).ready(function() {
    var maxLength = 130; 

    $('.rev__item__disc__text').each(function() {
        var $textBlock = $(this);
        var textLength = $textBlock.text().length;

        if (textLength > maxLength) {
            // Обрезаем текст до максимальной длины и сохраняем полный текст
            var trimmedText = $textBlock.text().substring(0, maxLength);
            var fullText = $textBlock.text();
            
            // Определяем высоту блока для обрезанного текста
            var trimmedHeight = $textBlock.css('height', maxLength).height();
            $textBlock.css('height', trimmedHeight).addClass('trimmed');

            // Добавляем кнопку "Читать полностью"
            $textBlock.after('<div class="rev__item__show"><p>Читать полностью</p><span> > </span></div>');

            // Обработчик клика на кнопку "Читать полностью"
            $textBlock.next('.rev__item__show').click(function() {
                if ($textBlock.hasClass('trimmed')) {
                    // Раскрываем текст
                    $textBlock.animate({ height: $textBlock.get(0).scrollHeight }, 500);
                    $(this).find('p').text('Свернуть');
                    $(this).find('span').addClass('full');
                } else {
                    // Сворачиваем текст
                    $textBlock.animate({ height: trimmedHeight }, 500);
                    $(this).find('p').text('Читать полностью');
                    $(this).find('span').removeClass('full');
                }
                $textBlock.toggleClass('trimmed');
            });
        }
    });
});