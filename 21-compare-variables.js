/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

const myVariable1 = 10;
const myVariable2 = '5';

console.log(myVariable1 <= Number(myVariable2)); // false
// or //
console.log(myVariable1 <= parseInt(myVariable2)); //false

const myVariable3 = '20';
const myVariable4 = 100;

console.log(parseInt(myVariable3) <= myVariable4); // true
// or //
console.log(Number(myVariable3) <= myVariable4); // true