'use strict';
// Map & Set - объекты, где свойствами могут являться любые типы данных, Set - без ключей, но изменить значение нельзя
// 1.Фильтрация уникальных элементов массива
// 2.Отфильтруйте анаграммы
// Переделать итератор цветов с использованием возможностей Map
//..............................................................................
// Итерируемые (перебираемые) объекты - чтобы запихнуть объект в "массивный" цикл for...of...
// 1.Написать итератор для чисел (без подглядок)
// 2.Написать итератор для цветов
// 3.Поработать с суррогатными парами ( Array.from())
// 4.Написать функцию splite, чтоб корректно работала с сррогатными парами ( а то длина массива с символами юникода, и 
// следовательно все индексы - чушь выходит :( )

// 1. Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:
// function unique(arr) {
//   /* ваш код */
//   return new Set( arr );
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// const rez = unique( values );
// console.log( 'rez =  ', rez ); // Hare,Krishna,:-O
// alert( Array.from( rez ) );    // Hare,Krishna,:-O
// console.log - преобразует set в array автоматически, для alert нужен Array.from - иначе проблеммы с выводом
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:
/* Start */
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// const str = 'Ласков словак Марина Армани Тропим Видал Ангола аналог налога вдали Влади притом импорт портим ранами ранима славок сковал';
// const arr = str.trim().split( ' ' );
// console.log( 'sourcesArr = ', ...arr );
// console.log( 'array of results = ', ...aclean( arr ) );
// function aclean( arrOfWords ) {
//     let rezultArr = new Set();
//     const mapOfWords = new Map();
//     function objFromWord ( str ) {
//         let counter = 1;
//         const setOfLetters = { size: str.length };
//         str = str.toLowerCase();
//         str = Array.from( str );
//         str.forEach( ( eli, i ) => {
//             str.forEach( ( elj, j) => {
//                 if ( ( eli == elj) && ( i !== j ) ) {
//                     counter++;
//                 }
//             });
//             setOfLetters[ eli ] = counter;
//             counter = 1; 
//         });
//         return setOfLetters;
//     };
//     function compareObjects( obj1, obj2 ) { // true, if obj2 == obj1
//         if ( !obj1.hasOwnProperty( 'size' ) || !obj2.hasOwnProperty( 'size' ) ) {
//             console.log( 'Ошибочка при преобразовании слова в объект. Отсутсвует длина слова :(' );
//             return false;
//         };
//         if ( obj1.size !== obj2.size ) return false;
//         for ( let key in obj1 ) {
//             if ( !(obj2.hasOwnProperty( key ) && obj1[ key ] == obj2[ key ] ) ) {
//                 return false;
//             } 
//         };
//         return true;
//     };
//     arrOfWords.forEach( el => mapOfWords.set( objFromWord( el ), el ) ); // создали мап: ключ- буква, число букв, длина слова: значение - само слово.
//     mapOfWords.forEach( ( el, i ) => { 
//         for( let couple of mapOfWords ) {
//             if ( compareObjects( i, couple[ 0 ] ) ) mapOfWords.set( couple[ 0 ], el );
//         };
//         rezultArr.add( el );
//     } );
//     return Array.from( rezultArr );
// };
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
/* Finish */

//Черновик. Чисто поиграться с Map & Set
// const tryy = new Map();
// tryy.set( 1, 25 ); // возвращает объект tryy с новым свойством - можно объединять в цепочки (см. ниже )
// tryy.set( 0, 31 );
// console.log( ...tryy );
// tryy.delete( 1 );
// console.log( ...tryy );
// console.log( tryy.get( 0 ) );
// tryy.set( 5, 17 ).set( 4, 16 ).set( 3, 15 );
// console.log( tryy.has( 1 ), tryy.has( 0 ), tryy.has( 4 ) );
// console.log( ...tryy );
// console.log( tryy.size );
// tryy.clear();
// console.log( tryy.size );
// tryy.set( undefined, 354 );
// console.log( tryy.get( undefined ) );
// tryy.set( null, '2f3' );
// console.log( tryy.get( null ) );
// tryy.set( Infinity, 0 );
// console.log( tryy.get( Infinity ) );
// const arr = [ 1, 2, 3, 4 ];
// tryy.set( arr, 5 );
// console.log( tryy.get( arr ) );
// console.log( tryy.has( Infinity ) ); 
// for( let prop of tryy.keys() ) { // перебор по ключамS - for..of.. вернет все ключи объекта
// console.log( prop ); 
// }
// for( let prop of tryy.values() ) { // перебор по значениям - for..of.. вернет все значения ключей объекта
//     console.log( prop ); 
// }
// for( let prop of tryy.entries() ) { // перебор по всему - for..of.. вернет все ключи + значения объекта в виде массивов из 2х элементов
//     console.log( prop ); 
// }
// let target = new Map();
// const ob = {
//     '1': 11,
//     '2': 22,
//     '3': 33,
// };
// const insideOb = {
//     a: 44,
//     b: 55,
//     c: 66,
//     toString() { 
//         let strObj = ""; 
//         for( let key in insideOb ) {
//             strObj +=  `${key}: ${insideOb[ key ]}, `;
//         };
//         return strObj.slice( 0, strObj.indexOf( "to" ) );
//     },
// };
// console.log( Object.keys( insideOb ).length );
// console.log( "It's inside property object: ", insideOb );
// const newMap = new Map( Object.entries( ob ) );
// newMap.set( 4, 44 ).set( insideOb, 88 );
// console.log( 'It was maked the newMap: ', newMap );
// const obFromMap = Object.fromEntries( newMap.entries() );
// console.log( "It's the object from the Map: ", obFromMap );
// console.log( "It's the number of the propertis in insideOb:  ", Object.keys( insideOb ).length );
// console.log( "It's the number of the propertis in newMap:  ", Object.keys( Object.fromEntries( newMap.entries() ) ).length );
// console.log( "It's the number of the propertis in obFromMap:  ", Object.keys( obFromMap ).length );
// newMap.forEach( ( value, key, map ) => {
//         console.log( key, value );
//         map.set( key, value * 2 );
//         console.log( key, newMap.get( key ) );
//         if ( map === newMap ) console.log( 'Pizdets!!!' );
//     }
// )
// console.log( 'After forEach newMap: ', newMap );
// const mapIter = newMap.keys();
// console.log( "Iterator : ", mapIter.next().value );  // 1
// console.log( "Iterator : ", mapIter.next().value );  // 2
// console.log( "Iterator : ", mapIter.next().value );  // 3
// console.log( "Iterator : ", mapIter.next().value );  // 4
// console.log( "Iterator : ", mapIter.next().value );  // 5
// console.log( "Iterator : ", newMap.keys().next().value );// 1 - вызывается не через константу mapIter, которая сохраняет предидущее значение, - так что все сначала
// console.log( "Iterator : ", mapIter.next().value );  // undefined - свойства закончились
// let set = new Set(["апельсин", "яблоко", "банан"]);
// set.forEach((value, valueAgain, set) => {
//     console.log(value);
//   });
// const start = new Set( [ 1, 2, 3, 4, 5 ] );
// const finish = new Set();
// console.log( 'before :  ', start );
// start.forEach( ( value, valueAgain, xz ) => { value *= 10; console.log( value ); finish.add( value ); } );
// console.log( 'finish :  ', finish );
// console.log( 'Arter :  ', start );


//.......................................................................................
// 1. Итератор (по мотивам учебника)
// const objectToIteration = {
//     from: -3,
//     to: 5,
// };
// objectToIteration[ Symbol.iterator ] = function() {
//     return { // возвращаем ОБЪЕКТ !
//         current: this.from,
//         last: this.to,
//         next() {        // next ДОЛЖЕН ВОЗВРАЩАТЬ ОБЪЕКТЫ !
//             if ( this.current > this.last ) {
//                 return { done: true } // done & value - зарезервированные имена свойств
//             } else {                  // с другими именами не работает!
//                 return { done: false, value: this.current++ }
//             }; // current - значение счетчика на конец итерации, передаваемое слудующему вызову функции next
//         }      // next() вызывается каждый раз при очередном прохождении for...of...
//     }
// };
// for( let el of objectToIteration ) {
//     console.log( el );
// }

// 2. Итератор для цветов (радуга)
// const objectOfColors = {
//     from: 'orange',
//     to: 'darkBlue',
// }
// objectOfColors[ Symbol.iterator ] = function() {
//     const rainbow = [
//         'red',
//         'orange',
//         'yellow',
//         'greem',
//         'blue',
//         'darkBlue',
//         'violett',
//     ]
//     return {         
//          current:  rainbow.indexOf( this.from ), // вачальная граница итераций - ставь че хошь, относительно исходно заданых
//                                               // установка счетчика в начальную позицию 
//          last:  rainbow.indexOf( this.to ),   // конечная граница инетаций - ставь че хошь, относительно исходно знаданых
//          colors: rainbow,
//          next() {
//             if ( this.current <= this.last ) { 
//                 // current - счетчик. Ну увеличивать, значит бесконечный цикл.
//                 this.current++; 
//                 // value - переменная (свойство), которое и будет выводится как элемент объекта в цикле for.of
//                 return { done: false, value: this.colors[ this.current - 1 ] }
//             } else {
//                 return { done: true }
//             }
//         }
//     }
// }
// for ( let color of objectOfColors ) {
//     console.log( color );
// }
// console.log( objectOfColors );

// 3. Поработать с суррогатными парами. Array.from( str );
// const strNorm = 'abcdefghijklmnopqrstuvwxyz';
// const strEngRus = 'abcdef абвгдежзийклмнопрст';
// const strEngRusEmodzi = 'вгде 🖕ф😍ц😎щ😏й😐😑😒d😓c😔b😕a😖𝒳😂';
// // Превращаем все в массивы
// const partOf = strNorm.split( '' );
// const partOfER = strEngRus.split( '' );
// const partOfERE = strEngRusEmodzi.split( '' );
// console.log( ...partOf, partOf.length );        // length 26 - норм
// console.log( ...partOfER, partOfER.length );    // length 26 - норм
// console.log( ...partOfERE, partOfERE.length );  // length 39 - 13 + 13 * 2 ( unicode )
// // в г д е   � � ф � � ц � � щ � � й � � � � � � d � � c � � b � � a � � � � � � 39
// // с таким массивом не поработаешь.
// console.log( partOfERE.join( '' ) ); // хотя обратно собирается корректно
// // Делаем из строки strEngRusEmodzi массив с учетом юникодовых прибамбасов:
// const uniArray = Array.from( strEngRusEmodzi );
// // в г д е   🖕 ф 😍 ц 😎 щ 😏 й 😐 😑 😒 d 😓 c 😔 b 😕 a 😖 𝒳 😂 26
// console.log( ...uniArray, uniArray.length );   // length 26 - норм !!!

// 4. Функция для корректной обработки строк с включением символов юникода ( 2 бита-байта )
// function splitUnicode( str ) {
//     return Array.from( str );
// }
// console.log( ...splitUnicode( strEngRusEmodzi ), 'Длина  строки  до  обработки:', strEngRusEmodzi.length, 'Длина строки после обработки:', splitUnicode(strEngRusEmodzi).length );

