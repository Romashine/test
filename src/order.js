/// <reference path="./bde.js" />


/**
 * 
 * Базовый класс
 * @class Order Класс заказов
 */
class Order {
    constructor(date, number) {
        this.date = date;
        this.number = number;
        this.typeOrder = "Order"; //Имя класса для отображения в сообщениях
    }
    confirm() {
        this.log("confirm");
    }
    close() {
        this.log("close");
    }
    /**
     * Вывод сообщения с названием Класса и операции
     * 
     * @param {any} operation Имя операции
     * @memberof Order
     */
    log(operation) {
        console.log(this.typeOrder, "::", operation);
    }
}
/**
 * Класс потомок класса Order
 * 
 * @class NormalOrder
 * @extends {Order}
 */
class NormalOrder extends Order {
    constructor() {
        super();
        this.typeOrder = "NormalOrder";
    }
    dispatch() {
        this.log("dispatch");
    }
    receive() {
        this.log("receive");
    }
}
/**
 * Класс потомок Order
 * 
 * @class SpecialOrder
 * @extends {Order}
 */
class SpecialOrder extends Order {
    constructor() {
        super();
        this.typeOrder = "SpecialOrder";
    }
    dispatch() {
        this.log("dispatch");
    }
}

// пример работы программы

const order1 = new Order("2017.06.21", "Order2");
const order2 = new SpecialOrder("2017.06.20", "Order1");

const orders = new OrderArray();
orders.add(order1);
console.log(orders);
orders.add(order2);
console.log(orders);
orders.add("not order"); // throw exception
console.log(orders.length); // 2

//orders.Sort();
//orders.toString();
/*
Orders
==================
Order 1
  name: Order1
  date: 2017.06.20
------------------
Order 2
  name: Order2
  date: 2017.06.21
==================
Total: 2 orders

*/

class OrderArray extends Collection{
    constructor(name, date){
        super();
        this.name = name;
        this.date = date;
    }

}