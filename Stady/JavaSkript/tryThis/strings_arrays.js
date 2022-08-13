"use strict";
// 1.Массивы.
// 0.Работа со строками.

// Задачи из учебника. Свойства массивов.
// ************************************************************************************
// 9.Сортировать в порядке по убыванию.
// let arr = [5, 2, -5, 1, -10, 11, 8];
// // // ... ваш код для сортировки по убыванию
// // alert( arr ); // 8, 5, 2, 1, -10
// // __________________________________________________________________
// function compereNumbers( a, b ) { // задает правила сравнения, т.к. сравнивать можно
//     if ( a > b ) return -1;       // что угодно с чем угодно. Играя с +1\-1 можно 
//     if ( a < b ) return 1;        // сортировать по возрастанию-убывания без использования
//     if ( a == b ) return 0;       // метода revers(). Если не задать принцип сравнения - sort() -
// }                                 // работает как со строками: 2 > 19, т.к. смотрит на первые символы.
// console.log( typeof arr[ 0 ] );
// console.log( arr.sort( compereNumbers ) ); // принцип сравнения передается как кол-бэк.
// 9a..........................Любое число > 0 значит а > b и т.д. Т.о. более короткое решение:
// console.log( ...arr.sort( ( a, b ) => a - b ) ); // По возрастанию
// console.log( ...arr.sort( ( a, b ) => b - a ) ); // По убыванию


// 8.Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
// ____________________________________________________________________
// let sorted = ( ar ) => ar.slice().sort(); 
// console.log( ...arr );
// console.log( ...sorted( arr ) );

// 7.Создать расширяемый калькулятор
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.
// ______________________________________________________________________
// function Calculator() {
//     this.whatICanDo = {
//         "+" : ( a, b ) => a + b,
//         "-" : ( a, b ) => a - b,
//         "*" : ( a, b ) => a * b,
//         "/" : ( a, b ) => a / b,
//         // "**" : ( a, b ) => a ** b,
//     },
//     this.calculate = ( str ) => {
//         console.log( str );
//         const expressionArray = str.trim().split(' ');
//         console.log( expressionArray );
//         let a = +expressionArray[ 0 ];
//         let sign = expressionArray[ 1 ];
//         let b = +expressionArray[ 2 ];
//         if ( isNaN( a ) || isNaN( b ) || !('+-*/**'.includes( sign ) ) ) {
//             console.log( 'Данные введены не корректно :(' );
//             return NaN;
//         };
//         return this.whatICanDo[ sign ]( a, b );      
//     },
//     this.addMethod = ( signature, expression ) => {
//         this.whatICanDo[ signature ] = expression;
//     }  
// }
// let powerCalc = new Calculator;
// powerCalc.addMethod( "**", ( a, b ) => a ** b );
// let rezult = powerCalc.calculate( '  3 ** 4 ' );
// console.log( rezult );

// 6.Трансформировать в массив имен
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// // let names = /* ... ваш код */
// // alert( names ); // Вася, Петя, Маша
// // ______________________________________________________________________________
// const names = users.map( el => el = el.name );
// console.log( names );

// 5.Трансформировать в объекты
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Например:
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// // let usersMapped = /* ... ваш код ... */
// // /*
// // usersMapped = [
// //   { fullName: "Вася Пупкин", id: 1 },
// //   { fullName: "Петя Иванов", id: 2 },
// //   { fullName: "Маша Петрова", id: 3 }
// // ]
// // */
// // alert( usersMapped[0].id ) // 1
// // alert( usersMapped[0].fullName ) // Вася Пупкин
// // Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.
// // _______________________________________________________________________________
// const usersMapped = users.map( el => el = { fullName: el.name + ' ' + el.surname, id: el.id } );
// console.log( usersMapped );

// 4.Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let aisha = { name: "Аиша", age: 31 };
// let arr = [ vasya, petya, masha, aisha ];
// // sortByAge(arr);
// // // теперь: [vasya, masha, petya]
// // alert(arr[0].name); // Вася
// // alert(arr[1].name); // Маша
// // alert(arr[2].name); // Петя
// // __________________________________________________________________________________
// console.log( arr.sort( ( a, b ) => a.name.localeCompare( b.name ) ) ); // Сортируем по имени
// console.log( arr.sort( ( a, b ) => a.age - b.age ) );                  // Сортируем по возрасту

// 3.Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
// let arr = [1, 2, 3, 4, 5, 6, 7];
// shuffle(arr);
// // arr = [3, 2, 1]
// shuffle(arr);
// // arr = [2, 1, 3]
// shuffle(arr);
// arr = [3, 1, 2]
// ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
// ________________________________________________________________________________________________
/* Я тут изобрел алгоритм "Тасование Фишера — Йетса" ( только не в обратном, а в прямом направлении), совершенно независимо */
/* НИ ОТ ФИШЕРА, НИ ОТ ЙЕТСА!!! Даже в Википедию не подсматривал. У дураков мысли сходятся (с) :) */
// function shuffle( array ) {
//     console.log( ...arr );
//     let indexOfSelectedElement;
//     let temp = 0;
//     for ( let i = 0; i < array.length; i++ ) {
//         indexOfSelectedElement = choiceOfElement( array.slice( i ) ); // Выбираем случайный элемент, отправляем массив уже без выбранных элементов
//         temp = array[ i ];                                            // Ставим его на i-ю позицию
//         array[ i ] = array[ indexOfSelectedElement + i ]; // первые i позиций уже заполнеы ранее выбранными
//         array[ indexOfSelectedElement + i ] = temp;
//     };
//     return array;
// }
// function choiceOfElement( arr ) {  // Функция случайным образом выбирает элемент из массива
//     const seachingIndex = Math.ceil( Math.random() * ( arr.length ) ) - 1;
//     return seachingIndex;
// };
// console.log( ...shuffle( arr ) );
// testRandom();
/* Блок статистической обработки данных - проверяем, равномерно ли распределяются выборы элементов */
// function testRandom() {
//     const counter = [];
//     for ( let i = 0; i < 7; i++) counter.push( 0 );
//     for ( let i = 1; i <= 10000000; i++ ) {
//         let ind = choiceOfElement( arr );
//         counter[ ind ]++;
//     }
//     const middle = counter.reduce( ( sum, el ) => sum + el, 0 ) / counter.length;
//     const delta = ( Math.max( ...counter ) - Math.min( ...counter ) );
//     console.log( ...counter );
//     console.log(  'error= ', delta / middle );
// }
/* Конец блока статистической обработки: относительная погрешность 0.25 % - вроде норм */

// // 2.Получить средний возраст
// // Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// // Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// // Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
// // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// // ___________________________________________________________________________________
// console.log( arr.reduce( ( sum, el ) => sum + el.age, 0 ) / arr.length );

// 1.Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:
// function unique(arr) {
//   /* ваш код */
// }
// let strings = ["далайлама", "кришна", "кришна", "харе", "пупс", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// alert( unique(strings) ); // кришна, харе, :-O
// _______________________________________________________________________________________________
// function unique(arr) {     // Вариант похож на решение из учебника, но плохо
//     const uniqueArr = [];
//     const size = arr.length;
//     for ( let i = 0; i < size; i++ ) {
//         let pattern = arr[ 0 ];
//         arr.splice( 0, 1 );
//         if ( !arr.includes( pattern ) ) uniqueArr.push( pattern );
//     }
//     return uniqueArr;
// }
// ....................1a. Пробуем лучше:....................................................
// function unique( arr ) {                             // Гениально! :))
//     const uniArr = [];
//     for ( let i = 0; i < arr.length; i++ ) {
//         let pat = arr[ i ];
//         if ( arr.indexOf( pat, 0 ) == i ) {           // значит раньше я таких элементов не встречал!!!
//             if ( arr.indexOf( pat, i + 1 ) == -1 ) {  // сам себе равен - переходи к следующему.
//             uniArr.push( pat );
//             }
//         }
//     }
//     return uniArr;
// }
// console.log( unique( strings ) );

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]_______________________________________________________
// let arr = [5, 8, 3, 8, 1];
// console.log( ...arr );
// function filterRangeInPlace(arr, a, b) {
//     for ( let index = 0; index < arr.length; index++ ) {
//         if ( arr[ index ] < a || arr[ index ] > b ) {
//             arr.splice( index, 1 );
//             index--;                  // .splice удаляя элемент, смещает индексы массива      
//         }
//         console.log( ...arr );
//     }
//     return arr;
// }
// console.log( ...filterRangeInPlace(arr, 1, 4) );
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)_________________________________________
// let arr = [5, 3, 8, 1];
// function filterRange(arr, a, b) {
//     let arrFilter = [];
//         arrFilter = arr.filter( el => el >= a && el <= b ); // .filter - сам создает цикл
//     return arrFilter;
// }
// console.log( ...arr );
// console.log( filterRange( arr, 1, 4 ) );

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';__________________________
// const string = "-webkit-transition-list-style-image";
// console.log( string );
// function camelize( str ) {
//     const strArr = str.split( '-' );
//     console.log( strArr );
//     for ( let i = 1; i < strArr.length; i++ ) {
//         strArr[ i ] = strArr[ i ][ 0 ].toUpperCase() + strArr[ i ].slice( 1, strArr[ i ].length );
//     }
//     return strArr.join( '' );
// }
// console.log( camelize( string ) );

// Поиск подмассива с максимальной суммой (алгоритм удостоился статьи в Википедии)
// Есть два накопителя "текущая сумма" (сумма на данной итерации) и "максимальная сумма" (максимум 
// из того что мы имели к данному моменту).
// Начинаем суммировать элементы массива, даже < 0, если текущая сумма стала < 0, значит все что было до
// этого просто "контрольный груз" для последующих накоплений. Максимум из того что имели раньше фиксируем
// в "макс сумме", а "текущую сумму" обнуляем. Если впоследствии накопится "текущая сумма", превышающая
// "максимальную сумму", присвоим ее значение "максимальной". И так до конца массива.
// const arr =  [ -2, 1, 2, 3, -3, 4, -3, 5, 0, -3, 4];
// let maxSum = 0;
// let currentSum = 0;
// for( let el of arr ) {
//     currentSum += el;
//     if ( currentSum < 0 ) currentSum = 0;
//     maxSum = Math.max( currentSum, maxSum ); 
// }
// console.log( maxSum );

//Массив в примитив: для массивов существует только toString
// const arr = [ 1, 2, 3, 4, 5 ];
// console.log( arr + 1 ); // "1,2,3,4,51"

// Развернуть (инвертировать) массив
// Вариант1
// const arr = [0, 1, 2, 3, 4, 5, 6];
// console.log( ...arr );
// for ( let i = 0; i <= arr.length - 1; i++ ) {
//     arr.push( arr[ arr.length - 1 - i ] );
//     arr.splice( arr.length -2 - i, 1 );
// }
// console.log( ...arr );
// Вариант1a (use arr.at()), splice работает с ОТРИЦАТЕЛЬНЫМИ ИНДЕКСАМИ!!!
// const arr = [0, 1, 2, 3, 4, 5, 6];
// console.log( ...arr );
// for ( let i = 0; i <= arr.length - 2; i++ ) {
//     arr.push( arr.at( -2 - i ) );
//     console.log( 'push i=    ', i, 'arr= ', ...arr );
//     arr.splice( -3 - i, 1 );
//     console.log( 'splice i=  ', i, 'arr= ', ...arr );
// }
// console.log( ...arr );
// Вариант2
// arr[ arr.length ] = null; // Вводим доп элемент массива, как временную переменную для замены
// const temp = arr.length - 1; // Индекс временной переменной
// const size = arr.length - 2; // Индекс последнего элемента массива
// for ( let i = 0; i < Math.floor( arr.length/2); i++ ) { // Проходим только пол массива
//     arr[ temp ] = arr[ i ];
//     arr[ i ] = arr[ size - i ];
//     arr[ size - i ] = arr[ temp ];
// }
// arr.pop();                  // Удаляем временную переменную
// console.log( ...arr );

// С Т Р О К И. ТРИ ЗАДАЧИ ИЗ УЧЕБНИКА:
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true
// function extractCurrencyValue( curStr ) {
//     if ( !curStr || ( isNaN( curStr[0] ) && isNaN( curStr[1] ) ) ) { 
//         return 'Чет не так...  ' + curStr; // Если строка пуста, либо 2 первых символа не цифры
//     } else {
//         return +curStr.slice( 1 );
//     }
// }
// const curency = '$165.4';
// console.log( extractCurrencyValue( curency ) );

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"
// console.log( String.fromCodePoint( 8230 ) );
// const str1 = 'У лукоморья дуб зеленый, злотая цепь на дубе том. И днем и ночью кот ученый все ходит по цепи кругом.';
// const str2 = 'Привет, как ты?';
// const str3 = "Вот, что мне хотелось бы сказать на эту тему:";
// const siz = 20;
// function truncate( str, maxSize ) {
//     if ( str.length > maxSize ) { // maxSize - 1, т.к. отсчет позиций символов с 0, а не с 1
//         return str.slice( 0, maxSize - 1 ) + String.fromCodePoint( 8230 ); 
//     } else {
//         return str;
//     }
// }
// console.log( truncate( str3, siz ) );
// console.log( '012345678901234567890123456789012' );

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
// const str1 = 'chto mozjet byt luchshe viAgRa. It the best from the best!';
// const str2 = 'Ho droop Rojer rabit?';
// const str3 = 'Vse idut na sever, a slony idut na vsexXxodno';
// function checkSpam( str ) {
//     return ( str.toLowerCase().includes( 'viagra' ) || str.toLowerCase().includes( 'xxx' ) ) ? true : false;
// }
// console.log( checkSpam( str3 ) );

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
// const civility = ( name ) => {
//     if ( name ) { 
//         name = name.trim();
//         return name[0].toUpperCase() + name.slice( 1 );
//     } else {
//         return 'Введите что-то толковое, а не это...';
//     }
// }
// console.log( civility( '   aldjhgf ;ka' ) );

// Берем код из символа и выводим символ по коду. ЕСТЬ НЮАНСЫ!
// const folder = '📁';
// const fu = '🖕.';
// const fu = '…';
// let fuCode = fu.codePointAt( 0 );
// console.log( 'Arter catch the symbol code from string:  ', fuCode );
// fuCode = '0x' + fuCode.toString( 16 );
// console.log( 'Arter .toString(16) and + 0x :', fuCode );
// let a = String.fromCodePoint( fuCode );
// console.log( 'Arter creating symbol a=', a );
// // Просто гоняем чила по системам счесления - смотрим как работает.
// let b = 0x1F594.toString( 2 );
// console.log( 'b=', b );
// let c = 128525..toString( 16 );
// console.log( 'c=', c );

// Выводим всякие кракозябрики из юникода. Если цикл запустить вперед - картинки еще интереснее
// let str = '';
// const love = 0x1F60D;
// for ( let i = 0; i < 10; i++ ) {
//     let nextFace = love + i;
// // console.log( String.fromCodePoint( nextFace ) );
//     str += String.fromCodePoint( nextFace );
// }
// console.log( str );


// Если нужны все вхождения подстроки в строку - пиши свой цикл:
// const st0 = 'на дворе трава на траве дрова';
// const st1 = '01234567890123456789012345678';
// // const str = 'Ослик Иа-Иа посмотрел на виадук';
// const purpose = 'рав';
// let position = 0;
// while ( position < st0.length - 1 ) {
//     position = st0.indexOf( purpose, position );
//     if ( position == -1 ) break;
//     console.log( position );
//     position++;
// };
// // Из учебника: цикл по true - бесконечный, выход по ненайденной подстроке.
// let target = 'иа'; // цель поиска
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;
//   console.log( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// };

// let str = 'Widget with id';
// console.log( str.indexOf("id") ); // pos = 1, W(id)get with id
// console.log( str.indexOf("id", 2) ); // pos = 12, Widget with (id)

// const str = 'Мама мыла раму';
// console.log( 'Мама мыла раму'.length );
// // str[13].toUpperCase;

// console.log( str[13] + str[10] + str[11] + '! ' + str.charAt(5) + str.charAt(6) );
// console.log( str.toUpperCase() );
// console.log( str.toLowerCase() );
// console.log( str[13].toUpperCase() );
// const str1 = str.slice( 5, -3 );
// console.log( str1 + str[13].toUpperCase() );
// console.log( str );
// for( let char of str ) {
//     console.log( char );
// }