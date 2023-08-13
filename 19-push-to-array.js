/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const newArray = [1, 2, 3];
console.log(newArray); // [1, 2, 3]
newArray.push(4,5);
console.log(newArray); // [1, 2, 3, 4, 5]
console.log(newArray.length); // 5