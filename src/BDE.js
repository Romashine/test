//@ts-check

class Collection {
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
