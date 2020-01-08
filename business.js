'use strict';

let money, time;

function start() {
     money = +prompt("Ваш Бюджет на місяць", "1000"); 
     time = prompt("Input Date YYYY-MM-DD", "2020-01-01");

     while(isNaN(money) || money == "" || money == null) {
          money = +prompt("Ваш Бюджет на місяць", "");
     }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введіть обовязкову статтю видатків в цьому місяці", ""),
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
        }     }
    },
    detectDayBubget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        };
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Процент");
            
            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);  
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введіть необовязкову статтю видатків в цьому місяці", "");
            let b = i + 1;
        
                console.log(i);
                console.log(b);
                
            if  ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                            
                    console.log("done");
                    appData.optionalExpenses[b] = a;                                              
            } else {
                i--;
                console.log(i);
        }     }
    },
    chooseIncome: function() {
           for (let i = 1; i < 2; i++) {

                let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", ""); 
        
                if ((typeof(items)) === "string" && (typeof(items)) != null && items != "") {
                    appData.income = items.split(", ");
                    appData.income.push(prompt("Может что-то еще,"));
                    appData.income.sort();
                    alert("Способы доп заработка");
                    appData.income.forEach(function(item, i, mass) {
                        alert( i+1 + ": " + item );
                    });
                        
                }  else {
                    i--;
                    }
           }
    }
};

for (let key in appData) {
    console.log("Наша програма включает в себя данные: " + key + ": " + appData[key]);
}
