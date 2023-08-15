/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false); // 3

1. (true && null); // null
2. (null || false) // false
3. (3 || false) // 3