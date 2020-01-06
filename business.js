'use strict';

let money = +prompt("Ваш Бюджет на місяць", "1000"); 
let time = prompt("Input Date YYYY-MM-DD", "2020-01-01");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}


for (let i = 0; i < 2; i++) {
    let a = prompt("Введіть обовязкову статтю видатків в цьому місяці", "Car"),
        b = prompt("Скільки це нам коштуватиме?", "100");

        console.log(a);
        console.log(b);

    if  ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                    if ((typeof(b)) === 'string' && (typeof(b)) != null && b != '') {
                            console.log("done");
                            console.log(i);
                            appData.expenses[a] = b;
                    } else {
                             i--;
                            console.log(i);
                            }
    } else {
        i--;
        console.log(i);
      }    
                            
    
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}



