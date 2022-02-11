// const number = prompt('Введите число:'); // ИЗМЕНЯТЬ ЗАПРЕЩЕНО

//РЕШЕНИЕ

// 5! = 5 * 4 * 3 * 2 * 1
const number = prompt('Введите число:');
console.log(typeof number);
const number1 = +number;
console.log(typeof number1);
// 1 * 2 * 3 * 4 * 5
let number2 = 1;
for(let i = 1; i <= number1; i++) {
    number2 = number2 * i;
   
}

console.log(number2)

// 1. проверить тип данных
// 2. преобразовать строку в число
// 3. сохраняем в переменную
// 4. вывести в консоль
// 5. 