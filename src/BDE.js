var arrayDate = ["12.06.2017", "12.06.2017", "16.06.2017", "23.06.2017", "02.10.2017"];
console.log(arrayDate);
var eror = false; //ключ прерывания программы при возникновении ошибок

/**
 * Определение индекса в массиве искомой даты
 * @param {*} dayWanted искомая дата в массиве
 */
function arrayFind(dayWanted) {
    for (var i = 0; i < arrayDate.length; i++) {
        if (dayWanted == arrayDate[i]) {
            return i;
        }
    }
    console.log("Not find date");
}

/**
 * Изменение одной даты в массиве на другую
 * @param {*} oldDay старое значение даты
 * @param {*} newDay новое значение даты
 */
function arrayEdit(oldDay, newDay) {
    eror = false;
    inputProtected(newDay);
    switch (eror) {
        case false:
            arrayDate[arrayFind(oldDay)] = newDay
            arraySort();
            console.log(arrayDate)
        default:
    }
}

/**
 * Добавление значения в массив
 * @param {*} newDay новая дата
 */
function arrayAdd(newDay) {
    var i = arrayDate.length;
    eror = false;
    inputProtected(newDay);
    switch (eror) {
        case false:
            arrayDate[i] = newDay;
            arraySort();
            console.log(arrayDate);
        default:
    }
}

/**
 * Удаление элемента из массива
 * @param {*} date удаляемая дата из массива
 */
function arrayDel(date) {
    var arrayDateNew = [];
    arrayDate[arrayFind(date)] = null;
    for (var i = 0, n = 0; i < arrayDate.length; i++) {
        if (arrayDate[i] != null) {
            console.log(arrayDate[i])
            arrayDateNew[n] = arrayDate[i];
            n++;
        }
    }
    arrayDate = arrayDateNew;
    console.log(arrayDate);
}

/**
 * Преобразует массив из дд/мм/гггг в гггг/мм/дд
 */
function arrayRotate() {
    var temp = "";
    for (var i = 0; i < arrayDate.length; i++) {
        for (var n = 6; n <= 9; n++) {
            temp += arrayDate[i].charAt(n);
        }
        temp += "."
        for (var n = 3; n <= 5; n++) {
            temp += arrayDate[i].charAt(n);
        }
        for (var n = 0; n < 2; n++) {
            temp += arrayDate[i].charAt(n);
        }
        arrayDate[i] = temp;
        temp = "";
    }

}

/**
 * Обратная функция arrayRotate
 */
function arrayRRotate() {
    var temp = "";
    for (var i = 0; i < arrayDate.length; i++) {

        for (var n = 8; n <= 9; n++) {
            temp += arrayDate[i].charAt(n);
        }
        temp += "."
        for (var n = 5; n <= 7; n++) {
            temp += arrayDate[i].charAt(n);
        }

        for (var n = 0; n < 4; n++) {
            temp += arrayDate[i].charAt(n);
        }

        arrayDate[i] = temp;
        temp = "";
    }

}

/**
 * Сортировка внутри массива
 */
function arraySort() {
    arrayRotate();
    arrayDate.sort();
    arrayRRotate();
}

function inputProtected(date) {
    var temp = 0;
    if (date.length != 10) {
        eror = true
    }
    for (var i = 0; i < 10; i++) {
        for (var n = 0; n < 10; n++) {
            if (date.charAt(i) == n) {
                temp++;
            }
        }
    }
    if (temp != 8) {
        eror = true;
    }
    if (date.charAt(2) != "." && date.charAt(5) != ".") {
        eror = true
    }
    if (eror == true) {
        console.log("формат ввода даты дд.мм.гггг");
    }
}