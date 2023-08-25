/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
  */

/*Option 0ne*/

let mess1 = setInterval(() => console.log('Сообщение номер 1'), 2000);
setTimeout(() => { clearInterval(mess1);}, 2000);

let mess2 = setInterval(() => console.log('Сообщение номер 2'), 4000);
setTimeout(() => { clearInterval(mess2);}, 4000);

let mess3 = setInterval(() => console.log('Сообщение номер 3'), 6000);
setTimeout(() => { clearInterval(mess3);}, 6000);

let mess4 = setInterval(() => console.log('Сообщение номер 4'), 8000);
setTimeout(() => { clearInterval(mess4);}, 8000);

let mess5 = setInterval(() => console.log('Сообщение номер 5'), 10000);
setTimeout(() => { clearInterval(mess5);}, 10000);


