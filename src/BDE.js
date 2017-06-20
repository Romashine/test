var eror = false; //ключ прерывания программы при возникновении ошибок

/**
 * Определение индекса в массиве искомой даты
 * @param {*} dayWanted искомая дата в массиве
 */
function arrayFind(array, dayWanted) {
    for (var i = 0; i < array.length; i++) {
        if (dayWanted == array[i]) {
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
function arrayEdit(array, oldDay, newDay) {
    eror = false;
    inputProtected(newDay);
    if (eror == false){
            array[arrayFind(array, oldDay)] = newDay;
            arraySort(array);
            console.log(array);
    }
}

/**
 * Добавление значения в массив
 * @param {*} newDay новая дата
 */
function arrayAdd(array, newDay) {
    var i = array.length;
    eror = false;
    inputProtected(newDay);
    if (eror == false) {
        array[i] = newDay;
        arraySort(array);
        console.log(array);
    }
}

/**
 * Удаление элемента из массива
 * @param {*} date удаляемая дата из массива
 */
function arrayDel(array, date) {
    var arrayDateNew = [];
    array[arrayFind(array, date)] = null;
    for (var i = 0, n = 0; i < array.length; i++) {
        if (array[i] != null) {
            arrayDateNew[n] = array[i];
            n++;
        }
    }
    array = arrayDateNew;
    console.log(array);
}

/**
 * Преобразует массив из дд/мм/гггг в гггг/мм/дд
 */
function arrayRotate(array) {
    var temp = "";
    for (var i = 0; i < array.length; i++) {
        for (var n = 6; n <= 9; n++) {
            temp += array[i].charAt(n);
        }
        temp += ".";
        for (var n = 3; n <= 5; n++) {
            temp += array[i].charAt(n);
        }
        for (var n = 0; n < 2; n++) {
            temp += array[i].charAt(n);
        }
        array[i] = temp;
        temp = "";
    }

}

/**
 * Обратная функция arrayRotate
 */
function arrayRRotate(array) {
    var temp = "";
    for (var i = 0; i < array.length; i++) {

        for (var n = 8; n <= 9; n++) {
            temp += array[i].charAt(n);
        }
        temp += ".";
        for (var n = 5; n <= 7; n++) {
            temp += array[i].charAt(n);
        }

        for (var n = 0; n < 4; n++) {
            temp += array[i].charAt(n);
        }

        array[i] = temp;
        temp = "";
    }

}

/**
 * Сортировка внутри массива
 */
function arraySort(array) {
    arrayRotate(array);
    array.sort();
    arrayRRotate(array);
}


/**
 * Проверка на ввод даты согласно нужного формата
 * @param {*} date 
 */
function inputProtected(date) {
    var temp = 0;
    if (date.length != 10) {
        eror = true;
        console.log("формат ввода даты дд.мм.гггг");
        return;
    }
    //Цикл проверки каждого символа в значении i позиции c цыфрами n
    for (var i = 0; i < 10; i++) {
        for (var n = 0; n < 10; n++) {
            if (date.charAt(i) == n) {
                temp++;
            }
        }
    }
    if (temp != 8) {
        eror = true;
        console.log("формат ввода даты дд.мм.гггг");
        return;
    }
    if (date.charAt(2) != "." && date.charAt(5) != ".") {
        eror = true;
         console.log("формат ввода даты дд.мм.гггг");
        return;
    }
    if (eror == true) {
        console.log("формат ввода даты дд.мм.гггг");
    }
}

//Проверка программы на ошибки
var array1 = [], array2 = [];
function testArray() {
    console.log("Создание массива 1");
    arrayAdd(array1, "10.10.2010");
    arrayAdd(array1, "09.09.2009");
    arrayAdd(array1, "11.11.2011");
    arrayAdd(array1, "10.10.201");

console.log("Создание массива 2");
    arrayAdd(array2, "10.102010");
    arrayAdd(array2, "08.09.2008");
    arrayAdd(array2, "12.11.2012");
    arrayAdd(array2, "11.10.2011");

console.log("функция Edit применяется к массиву 1, 10.10.2010 заменяем на 11.10.2010");
    arrayEdit(array1, "10.10.2010", "11.10.2010");
    console.log("функция Del применяется к массиву 2, удаляем 12.11.2012");
    arrayDel(array2, "12.11.2012");

}
