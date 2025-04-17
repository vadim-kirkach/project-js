'use strict';

let title = prompt('Как называется ваш проект?');
console.log(title);

let screens = prompt("Какие типы экранов нужно разработать?", 'Простые, Сложные, Интерактивные');
console.log(screens);

let screenPrice = +prompt("Сколько будет стоить данная работа?", '12000');
console.log(screenPrice);
const rollback = 20;

let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'подключение доставки');
let servicePrice1 = +prompt('Сколько будет стоить услуга?', '5000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'подключение онлайн оплаты');
let servicePrice2 = +prompt('Сколько будет стоить услуга?', '3000');

let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (Number(rollback) / 100)));
console.log(servicePercentPrice);

if (fullPrice >= 30000) {
  console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log('Скидка не предусмотрена');  
} else if (fullPrice <= 0) {
  console.log('Что то пошло не так');
}  else if (fullPrice === 30000) {
    console.log('Даем скидку в 10%');
}  else if (fullPrice === 15000) {
    console.log('скидка не предусмотрена');        
} else {
  console.log('Заполните опрос еще раз');
}



console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback / 100)); 