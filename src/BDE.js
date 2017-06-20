//@ts-check
class Romario {
    constructor() {
        this.array = [];
    }

    /**
     * Определение индекса в массиве искомой даты
     * @param {*} dayWanted искомая дата в массиве
     * @param {*} array массив в котором производится поиск
     */
    Find(dayWanted) {
        for (var i = 0; i < this.array.length; i++) {
            if (dayWanted == this.array[i]) {
                return i;
            }
        }
        console.log("Not find date");
    }
    /**
 * Изменение одной даты в массиве на другую
 * @param {*} oldDay старое значение даты
 * @param {*} newDay новое значение даты
 * @param {*} array массив в котором производится редактирование
 */
    Edit(oldDay, newDay) {
        if (!this.Chek(newDay)) {
            this.array[this.Find(oldDay)] = newDay;
            this.Sort();
            return this.array;
        }
    }

    /**
 * Добавление значения в массив
 * @param {*} newDay новая дата
 * @param {*} array массив в котором производится добавление
 */
    Add(newDay) {
        var i = this.array.length;
        if (!this.Chek(newDay)) {
            this.array[i] = newDay;
            this.Sort();
            return this.array;
        }
    }
    /**
     * Удаление элемента из массива
     * @param {*} date удаляемая дата из массива
     * @param {*} array массив в котором производится удаление
     */
    Del(date) {
        this.array.splice(this.Find(date), 1);
        return this.array;
    }
    /**
     * Преобразует массив из дд/мм/гггг в гггг/мм/дд
     * @param {*} array массив в котором производится переворот
     */
    Rotate() {
        var temp = "";
        for (var i = 0; i < this.array.length; i++) {
            for (var n = 6; n <= 9; n++) {
                temp += this.array[i].charAt(n);
            }
            temp += ".";
            for (var n = 3; n <= 5; n++) {
                temp += this.array[i].charAt(n);
            }
            for (var n = 0; n < 2; n++) {
                temp += this.array[i].charAt(n);
            }
            this.array[i] = temp;
            temp = "";
        }
        return this.array;
    }

    /**
     * Обратная функция arrayRotate
     * @param {*} array массив в котором производится переворот
     */
    RRotate() {
        var temp = "";
        for (var i = 0; i < this.array.length; i++) {

            for (var n = 8; n <= 9; n++) {
                temp += this.array[i].charAt(n);
            }
            temp += ".";
            for (var n = 5; n <= 7; n++) {
                temp += this.array[i].charAt(n);
            }

            for (var n = 0; n < 4; n++) {
                temp += this.array[i].charAt(n);
            }

            this.array[i] = temp;
            temp = "";
        }
    }

    /**
     * Сортировка внутри массива
     * @param {*} array массив в котором производится сортировка
     */
    Sort() {
        this.Rotate();
        this.array.sort();
        this.RRotate();
    }


    /**
     * Проверка на ввод даты согласно нужного формата
     * @param {*} date 
     */
    Chek(date) {
        var temp = 0;
        if (date.length != 10) {
            console.log("формат ввода даты дд.мм.гггг");
            return true;
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
            console.log("формат ввода даты дд.мм.гггг");
            return true;
        }
        if (date.charAt(2) != "." && date.charAt(5) != ".") {
            console.log("формат ввода даты дд.мм.гггг");
            return true;
        }
    }
}

//class
function classTest() {
    let item1 = new Romario();
    let item2 = new Romario();
    item1.Add("10.10.2010");
    item1.Add("09.09.2009");
    item1.Add("11.11.2011");
    item1.Add("10.10.201");
    console.log();
    console.log("Создание массива 2");
    item2.Add("10.102010");
    item2.Add("08.09.2008");
    item2.Add("12.11.2012");
    item2.Add("11.10.2011");
    console.log(item2.array);

    console.log("функция Edit применяется к массиву 1, 10.10.2010 заменяем на 11.10.2010");
    item1.Edit("10.10.2010", "11.10.2010");
    console.log(item1.array);
    console.log("функция Del применяется к массиву 2, удаляем 12.11.2012");
    item2.Del("12.11.2012");
    console.log(item2.array);
}




/*
//Проверка программы на ошибки
var array1 = [], array2 = [];
function testArray() {
    console.log("Создание массива 1");
    arrayAdd(array1, "10.10.2010");
    arrayAdd(array1, "09.09.2009");
    arrayAdd(array1, "11.11.2011");
    arrayAdd(array1, "10.10.201");
    console.log(array1);

    console.log("Создание массива 2");
    arrayAdd(array2, "10.102010");
    arrayAdd(array2, "08.09.2008");
    arrayAdd(array2, "12.11.2012");
    arrayAdd(array2, "11.10.2011");
    console.log(array2);

    console.log("функция Edit применяется к массиву 1, 10.10.2010 заменяем на 11.10.2010");
    arrayEdit(array1, "10.10.2010", "11.10.2010");
    console.log(array1);
    console.log("функция Del применяется к массиву 2, удаляем 12.11.2012");
    arrayDel(array2, "12.11.2012");
    console.log(array2);
}
*/

