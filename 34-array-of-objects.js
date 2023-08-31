/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {carBrand: 'BMW', price: 30, isAvailableForSale: true},
    {carBrand: 'Hodna', price: 20, isAvailableForSale: true},
    {carBrand: 'Mazda', price: 10, isAvailableForSale: false}
];

cars.push({carBrand: 'Lada', price: 7, isAvailableForSale: true});
console.log(cars); // {carBrand: 'BMW', price: 30, isAvailableForSale: true}
                   // {carBrand: 'Hodna', price: 20, isAvailableForSale: true} 
                   // {carBrand: 'Mazda', price: 10, isAvailableForSale: false}
                   // {carBrand: 'Lada', price: 7, isAvailableForSale: true}