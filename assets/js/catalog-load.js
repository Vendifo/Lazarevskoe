$(document).ready(function() {
    var totalItems = $('.catalog__list .choice-item').length;
    
    $('.catalog__list .choice-item:gt(3)').hide();

    function showNextItems() {
        var hiddenItems = $('.catalog__list .choice-item:hidden');
        if (hiddenItems.length > 0) {
            hiddenItems.slice(0, 4).slideDown('slow', function() {
                if ($('.catalog__list .choice-item:hidden').length === 0) {
                    $('.catalog__button').hide();
                }
            });
        }
    }

    $('.catalog__button').click(showNextItems);

    
});