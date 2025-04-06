const title = "Расчет стоимости разработки";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 4000;
const rollback = 20;
const fullPrice = 60000;
const adaptive = true;

console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback / 100)); 