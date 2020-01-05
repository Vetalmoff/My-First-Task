'use strict';

let money = prompt("Ваш Бюджет на місяць", "1000"); 
let time = prompt("Input Date YYYY-MM-DD", "2020-01-01");
let appData = {
    money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

let first = prompt("Введіть обовязкову статтю видатків в цьому місяці", "Car");
let second = prompt("Скільки це нам коштуватиме?", "100");

/*  let expenses = {
     [first]: second,
};  */

 let expenses = {};
 expenses.first = second;

alert( expenses.first );


console.log(expenses);

alert(+money / 30);


console.log(money);
console.log(time);
console.log(first);
console.log(second);
console.log(appData);


