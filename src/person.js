/// <reference path="./main.js" />
/**
 * Creates person with name and age
 * @param {*} name name of person
 * @param {*} age age of person
 */
function personCreate(name, age) {
    var person = {
        name: name,
        age: age,
    };
    return person;
}
var person1 = personCreate("Bob", 1)
console.log("Person", person1)

// one commet

/* multi comment
*/

//if
if (person1 != null) {

} else {

}
/**
 * else if
 * && and
 * || or
 * > < == === != !== >= <=
 */
/*
switch (n) {
    case 1:
        break;
    case 2:
        break;
    default:
}
*/
for (var i = 0; i < array1.length; i++) {
    var item = array1[i];
    console.log("Item", i, item);
}

var i = 0;
while (i < array1.length) {
    var item = array1[i];
    i++;
}
/*
n = n + 1;
n += 1;
n++;
++n;

str += "!!!"
*/

var str = "Bob";
var num = 1;
var float = 2.4;
var b = true;
var array = [1, 2, 3, 4, 5, 6];
var array1 = ["sads", true, -1234, person1];
