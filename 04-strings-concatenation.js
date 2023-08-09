/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Vlad';
const mySecondName = 'Labkovich';
let myProf = 'engineer';
let variable = 'My name is ' + myName + ' ' + mySecondName + ' and I am ' + myProf;
console.log(variable); // My name is Vlad Labkovich and I am engineer

let variableTwo = `My name is ${myName} ${mySecondName} and I am ${myProf}`;
console.log(variableTwo); // My name is Vlad Labkovich and I am engineer`