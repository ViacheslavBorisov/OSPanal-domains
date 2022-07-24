// Замыкания
// Объект функции, NFE

// Замыкания
// 1. Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// function sum( x ) {
//     return function( y ) {
//         return x + y;
//     }
// }
// console.log( sum(1)(2) );
// console.log( sum(5)(-1) );
// console.log( sum(-7)(-3) );

// 2. Фильтрация с помощью функции
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с 
// помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:
// let arr = [77, 1, 2, 3, 4, 5, 6, 7];
// function inBetween( a, b ) {
//     return function( el ) {
//         return el >=a && el <= b;
//     }
// };
// function inArray( patternArr ) {
//     return function( el ) {
//         for( let pat of patternArr ) {
//             if ( el == pat ) return el;
//         }
//     }
// };
// console.log( arr.filter(inBetween(4, 7)) ); // 3,4,5,6  arr.filter( el, ( a <= el ) && ( el <= b ) )
// console.log( arr.filter(inArray([1, 2, 10, 77])) ); // 1,2

// 3. Сортировать по полю
// У нас есть массив объектов, который нужно отсортировать:
// let users = [
//   { name: "John", age: 20, surname: "Hathaway" }, 
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Johnson" }
// ];
// console.log( users );
// Обычный способ был бы таким:
// // по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// console.log( users );
// // по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?
// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.
// function byField( field ) {
//     return function( a, b ) {
//         return a[ field ] > b[ field ] ? 1 : -1;
//     } 
// };
// users.sort(byField('age'));
// console.log( users );
// users.sort(byField('name'));
// console.log( users );
// users.sort(byField('surname'));
// console.log( users );

// 4. Армия функций
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
// Неисправный код из учебника:
// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() { // функция shooter
//         console.log( i ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter);
//       i++;
//     }
//     return shooters;
//   }
// ИСПРАВЛЕННЫЙ КОД: ЦИКЛ FOR ГЕНЕРИРУЕТ СОБСТВЕННОЕ ЛО ( ПЕРЕМЕННАЯ i - ВНУТРЕННЯЯ!!!) КАЖДУЮ ИТЕРАЦИЮ, В ОТЛИЧИЕ ОТ 
// ЦИКЛА while, ГДЕ i - ПЕРЕМЕННАЯ ВНЕШНЕГО ОКРУЖЕНИЯ, КОТОРАЯ ТОЛЬКО ИЗМЕНЯЕТСЯ ВНУТРИ ЦИКЛА.
// function makeArmy() {
//     let shooters = [];
//     for( let i = 0; i < 10; i++ ) { 
//         function shooter() { // функция shooter
//             console.log( i ); // должна выводить порядковый номер
//         }
//         shooters.push(shooter); // массив shooters - набор функций, выводящих порядковый номер элемента массива.
//     }
//     return shooters;
// }
// let army = makeArmy();
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

// Объект функции, NFE
// 1.Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
// Храним текущее значение счетчика во внешней переменной ЛО - используем замыкание.
// function makeCounter() {
//     let rez = 0;
//     return function counter() {
//         counter.set = ( a ) => {
//             rez = a;
//             return rez;
//         }
//         counter.decrease = () => {
//             rez--;
//             return rez;
//         }
//         rez++;
//         return rez;
//     }
// };
// let counter = makeCounter();
// Храним текущее значение счетчика в свойстве функции
// function makeCounter() {
//     makeCounter.current = 0;
//     return function counter() {
//             counter.set = ( a ) => {
//                 counter.current = a;
//                 return counter.current;
//             } 
//             counter.decrease = () => {
//                 counter.current -= 1;
//                 return counter.current; 
//             }
//             //if ( !counter.current ) counter.current = makeCounter.current;
//             counter.current = (counter.current) ? counter.current : makeCounter.current;
//             counter.current += 1;
//             return counter.current;
//     }
// }
// Решение из учебника: методы set & decrese вписаны прямо в makeCounter, значит присутствуют в глобальном окружении и доступны
// Мои длиннее, НО РАБОТАЮТ КРАСИМШЕ :)
// function makeCounter() {
//     let count = 0;
//     function counter() {
//       return count++;
//     }
//     counter.set = value => count = value;
//     counter.decrease = () => count--;
//     return counter;
//   }
// let counter = makeCounter();
// console.log( counter() );
// console.log( counter() );
// console.log( counter() );
// console.log( counter.set( 18 ) );
// console.log( counter.decrease() );
// console.log( counter.decrease() );
// console.log( counter.decrease() );
// console.log( counter() );
// console.log( counter() );
// console.log( counter.set( 0 ) );
// console.log( counter() );
// console.log( counter.decrease() );
// console.log( counter.decrease() );
// console.log( counter.decrease() );

// 2.Напишите функцию sum, которая бы работала следующим образом:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
// function sum( x ) {
//     let currentSum = x;
//     function s2( y ) {
//         currentSum = currentSum + y;
//         console.log( currentSum );
//         return s2;
//     }
//     s2.toString = function() {
//         return currentSum;
//     };
//     s2.valueOf = function() {
//         return currentSum;
//     };
//     return s2; 
// };
// function sum(a) {
//     let currentSum = a;
//     function f(b) {
//       currentSum += b;
//       return f;
//     }
//     f.toString = function() {
//       return currentSum;
//     };
//     return f;
//   }
// console.log( sum( 41 )( 2 )( 3 )( 10 )( 22 ) );
//alert( sum( 41 )( 2 )( 3 )( 10 )( 22 ) );

// NFE
// let sayHi = function(who) {
//     console.log(`Hello, ${who}`);
//     console.log( sayHi.name );
// };
// sayHi( 'vasya' );
// console.log( sayHi.name );

const str = 'return x + y';
let a = 1;
let b = 6;
let func = new Function( 'x, y', str);
alert( func( a, b ) );

