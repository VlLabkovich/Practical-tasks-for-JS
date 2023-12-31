/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

// явный способ
const helloWorld = () => {
    return "Привет, мир!";
};
helloWorld(); // 'Привет, мир!'

// неявный способ
const helloWorld = () => 'Привет, мир!';
helloWorld(); // 'Привет, мир!'