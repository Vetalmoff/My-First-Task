'use strict';

let money = prompt("Ваш Бюджет на місяць", "1000"); 
let time = prompt("Input Date YYYY-MM-DD", "2020-01-01");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

let first = prompt("Введіть обовязкову статтю видатків в цьому місяці", "Car");
let second = prompt("Скільки це нам коштуватиме?", "100");
let third = prompt("Введіть обовязкову статтю видатків в цьому місяці", "Bike");
let fourth= prompt("Скільки це нам коштуватиме?", "200");

/*  let expenses = {
     [first]: second,
};  */

 appData.expenses.first = second;
 appData.expenses.third = fourth;

alert(appData.budget / 30);


console.log(money);
console.log(time);
console.log(first);
console.log(second);



