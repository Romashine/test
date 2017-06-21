/**
 * 
 * Класс прородитель классов NomalOrder и SpecialOrder
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
    log(operation){
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
    constructor(){
        super();
        this.typeOrder = "NormalOrder";
    }    
    dispatch(){
        this.log("dispatch");
    }
    receive(){
        this.log("receive");
    }
}
class SpecialOrder extends Order {
    constructor(){
        super();
        this.typeOrder = "SpecialOrder";
    }    
    dispatch(){
        this.log("dispatch");
    }
}
 
 /**
  * Проверка вывода сообщений
  * 
  */
 function testOrders(){
     const test1 = new Order("05.06.2017", 56);
     const test2 = new NormalOrder("05.07.2017", 56);
     const test3 = new SpecialOrder("05.08.2017", 56);
     test1.confirm();
     test1.close();
     test2.confirm();
     test2.dispatch();
     test2.receive();
     test3.confirm();
     test3.dispatch();
 }