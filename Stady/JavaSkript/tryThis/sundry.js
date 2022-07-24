'use strict';
// Типы данных
// console.log( typeof undefined );
// console.log( typeof null );
// console.log( typeof NaN );
// console.log( typeof Infinity );
// if ( NaN < -Infinity ) console.log( 'NaN < -infinity' );
// if ( NaN > Infinity ) console.log( 'NaN > infinity' );
// if ( NaN < 0 ) console.log( 'NaN < 0' );
// if ( NaN > 0 ) console.log( 'NaN > 0' );
// if ( NaN == 0 ) console.log( 'NaN = 0' );
// console.log( undefined == null );
// console.log( undefined == NaN );
// console.log( NaN == null );
// console.log( undefined === null );
// console.log( 'NaN = NaN', NaN == NaN );
// console.log( 'lalala' == NaN );
// console.log( NaN.toString() );
// console.log( 'NaN' == NaN.toString() );

// Деструктурирующее присваивание
// let a = 5;
// let b = 3;
// console.log( 'a=', a );
// console.log( 'b=', b );
// [a, b] = [b, a]; // должен быть именно массив, если {} = {}, имя меняет имя [] = [] - место меняет место 
// console.log( 'a=', a );
// console.log( 'b=', b );

// Массивы: метод .reduce
// const arr = [ 1, 2, 3, 4, 5 ];
// const init = 5;
// const arrSum = arr.reduce( ( sum, el, index, array ) => 
//      sum += el, init
// );
// console.log( arrSum );


// const arr = [ 1, -3, 8, 15, 1, 1, 8, 0, -15, -3 ];
// console.log( ...arr );
// let rez = new Set();
// arr.forEach( el => rez.add( el ) );
// rez = Array.from( rez );
// console.log( ...rez );
// // Идиотская  запись. Разбираюсь.
// let a = undefined || 5; // разобрался: равна результату undefined || 5;
// console.log( a );

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   function sumSalaries( salaries ) {
//     let sum = 0;
//     for( let sal of Object.values( salaries ) ) {
//         sum += sal;
//     }
//     return sum;
//   }
//   console.log( sumSalaries(salaries) ); // 650
//   let user = {
//      name: 'John',
//      age: 30,
//      bage: ''
//     };
//   function count( obj ) {
//     return Object.keys( obj ).length;
//   }
//   console.log( count(user) ); // 2

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   let {title = 3, width, height = 50} = options;
//   console.log(title, width, height);

// function f( a, b, c, d, e, ...f ) {
//     let arr = [ a, b, c, d, e ];
//     console.log(' a ', a );
//     console.log(' b ', b );
//     console.log(' c ', c );
//     console.log(' d ', d );
//     console.log(' e ', e );
//     console.log(' f ', f );
//     console.log(' arg ', arguments, typeof arguments );
//     console.log(' arr ', arr, typeof arr );
//     console.log(' arg3 ', arguments[ 3 ] );
// }
// f( 1, 2 );

// let i = 0;
// function sum( n ) {
//     if ( !n ) return 0;
//     i++;
//     console.log( i );
//     return n + sum( n - 1 );
// }
// console.log( sum( 5 ) );
// Fibonachi
// function fib( n ) {
//     return ( n <= 1 ) ? n : fib( n - 1 ) + fib( n - 2 );
// };
// for( let i = 1; i <= 10; i++ ) {
// console.log( i, '   ', fib( i ) );
// }

// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++; // есть доступ к внешней переменной "count"
//     };
//   }
//   let counter = makeCounter(); 
//   console.log( counter() ); // 0
//   console.log( counter() ); // 1
//   console.log( counter() ); // 2
  // function proba() { // ЛО данной функции не удалиться из памяти после ее вызова (стр 132)
  //                    //т.к. существует встроенная функция, св-во enviroment которой ссылается на это окружение
  //   let i = 0;
  //   const arr = [ 'Vitya', 'Petya', 'Kolya', 'Masha', 'Sasha', 'Dasha' ];
  //   return function() { // enviroment этой функции обеспечивает сохранность в памяти ЛО proba.
  //       return arr[ i++ ]; 
  //   };
  // };
  // let names = proba(); // обращение к встроенной в proba функ-и меняет параметр i в ЛО proba.
  // // Пока есть names, есть ф-я внутри proba => eсть inviroment этой ф-и, ссылающийся на ЛО
  // // proba (внешнее для него), => все, даже видоизмененные переменные из ЛО proba будут сохранены.
  // console.log( names() );
  // console.log( names() );
  // console.log( names() );
  // console.log( names() );
  // console.log( names() );
  // console.log( names() );

  // Декоратор - кэшератор. Пробую повторить за учебником...
  // function wdf( x, ...y ) { // wdf - wery dificalt function - суммирует все что поступит, сколько бы ни было.
  //   return x + y.reduce(( sum, el ) => sum += el );
  // };
  // function casheRator( func, hash ) { // get a function such input parametr
  //   const cash = new Map;       // создаем в ЛО функции хранилище для кэша( если она такое уже считала, пусть будет там)
  //   return function() {    // эта функция по сути исходная ф-я + некая логическая оболочка ( если че - бери из кэша)
  //     const key = hash( arguments ); // создаем ключ для хэш-мапа из набора аргументов
  //     if ( cash.has( key ) ) {  // если такие исходные данные (arg) уже встречались, то результат не считаем, а берем из кэша.
  //       console.log( ' From cash ' );
  //       return cash.get( key );  // вот тут и берем собственно из кэша и возвращаем наружу
  //     }
  //     let rez = func.call( this, ...arguments );  // а если не встречались, придется считать по честному - передаем аргумент в колбэк.
  //     cash.set( key, rez );      // аргумент и соответствующий ему результат записываем в кэш
  //     console.log( ' Directly ' );
  //     return rez;                // и возвращаем наружу
  //   };
  // }
  // function hash( arr ) {             // формирует ключ- строку из набора аргументов, соединяя их запятой (или еще чем :))
  //   arr = Array.from( arr ).join('+'); // почему-то arguments поступил в виде объекта пар { '0':3, '1':3, '2':3 }
  //   // const k = arr.join('+');
  //   console.log( 'key=', arr );
  //   return arr;
  // }
  // wdf = casheRator( wdf, hash );       // Вместо функции делаем ту же функцию + ЛО кэшератора
  // console.log( wdf( 3, 3, 3, 3 ) );    //  Directly   12
  // console.log( wdf( 4, 4, 4 ) );       //  Directly   12
  // console.log( wdf( 5, 4, 3, 2, 1 ) ); //  Directly   15
  // console.log( wdf( 3, 2, 1 ) );       //  Directly   6
  // console.log( wdf( 8, 1, 1 ) );       //  Directly   10
  // console.log( wdf( 4, 4, 4 ) );       //  From cash  12
  // console.log( wdf( 5, 5, 5 ) );       //  Directly   15
  // console.log( wdf( 3, 3, 3, 3 ) );    //  From cash  12

// const worker = {
//   fff: 10,
//   slow( a ) {
//     console.log( 'We are here' );
//     return a * a * this.fff;
//   }
// }
// const obj = {
//   fff: 100,
// }
// console.log( worker.slow(2));
// let func = worker.slow;
// let rez = func.call(worker, 3)
// console.log( rez );
// rez = func.call(obj, 3)
// console.log( rez );

// let worker = {
//   someMethod() {
//     return 1;
//   },
//   slow(x) {
//     console.log("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) { return cache.get(x); }
//     // console.log( this );
//     let result = func.call(this, x); 
//     cache.set(x, result);
//     return result;
//   };
// }
// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
// console.log( worker.slow(2) ); // работает
// console.log( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)

// const obj_a = {
//   name: 'obj_a',
//   showThis() {
//     console.log( this );
//   }
// }

// function decor( func ) {
//   return function wrapper() {
//     console.log( 'this in the wrapper is:', this );
//     func.call( this );
//     func();
//     return this;
//   }
// }
// // ВОПРОС: как и в какой момент wrapper понимает что this это не globalThis, а контекст func?
// const a = { name: 'objA' };
// function f() {
//   console.log( 'this in the f() is: ', this );
//   return this;
// }
// a.met = decor( f ); 
// // ВОТ ГДЕ ЗАРЫТО ЧУДО!!! КАК ВЫЗЫВАЕШЬ - ТАКОЙ И КОНТЕКСТ!
// a.met();
// let x = a.met;
// x();
// const b = { name: 'objB' };
// b.met = x;
// b.met();
// b.met.call( b );
// b.met.call( a );
// let y = b.met;
// y();
