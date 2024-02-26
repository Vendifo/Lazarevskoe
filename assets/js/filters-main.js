flatpickr("#checkInInput input", {
    dateFormat: "j F", // Формат даты (например, "1 апрель")
    locale: {
        weekdays: {
            shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
        },
        months: {
            shorthand: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            longhand: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        }
    },
    onClose: function (selectedDates, dateStr, instance) {
        // При закрытии календаря, обновляем значение в элементе ".check-in"
        document.querySelector("#checkInInput .check-in").textContent = dateStr;
    }
});

// Инициализация Flatpickr для элемента "Выезд"
flatpickr("#checkOutInput input", {
    dateFormat: "j F", // Формат даты (например, "30 апрель")
    locale: {
        weekdays: {
            shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
        },
        months: {
            shorthand: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            longhand: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        }
    },
    onClose: function (selectedDates, dateStr, instance) {
        // При закрытии календаря, обновляем значение в элементе ".check-out"
        document.querySelector("#checkOutInput .check-out").textContent = dateStr;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var decrementBtn = document.getElementById('decrementBtn');
    var incrementBtn = document.getElementById('incrementBtn');
    var textPeople = document.getElementById('textPeople');
    var closePeopleMenu = document.getElementById('closePeopleMenu');

    var vacFunc = document.getElementById('vac-func');
    var vacButton = document.querySelector ('.vacation__button');

    var varPeopleCount = 1;

    textPeople.addEventListener('click', function () {
        vacFunc.classList.toggle('active');
        vacButton.classList.toggle('active');
    });

    closePeopleMenu.addEventListener('click', function () {
        vacFunc.classList.remove('active');
        vacButton.classList.remove('active');
    });

    decrementBtn.addEventListener('click', function () {
        if (varPeopleCount > 1) {
            varPeopleCount--;
            updateVarPeopleElement();
            if (varPeopleCount == 1) {
                textPeople.textContent = varPeopleCount + ' гость';
            } else if (varPeopleCount == 2) {
                textPeople.textContent = varPeopleCount + ' гостя';
            }
            else {
                textPeople.textContent = varPeopleCount + ' гостей';
            }

        }
    });


    incrementBtn.addEventListener('click', function () {
        if (varPeopleCount == 2) {
            varPeopleCount++;
            updateVarPeopleElement();
            textPeople.textContent = varPeopleCount + ' гостя';
        } else { 
            varPeopleCount++;
            updateVarPeopleElement();
            textPeople.textContent = varPeopleCount + ' гостей';
        }
        
    });

    function updateVarPeopleElement() {
        textPeople.textContent = varPeopleCount + ' гостей';
    }

});

