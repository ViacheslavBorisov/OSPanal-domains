'use strict';
if ( globalThis.toString() == '[object global]' ) global.alert = function( ...arg ) { console.log( ...arg ) };
if ( globalThis.toString() == '[object Window]' ) {
    let temp = alert;
    window.alert = function(...arg) { temp( arg.join(' ') )}};
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
// console.log( 'NaN' == NaN.toString() )

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

//Отсортировать только четные числа в массиве
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const rez = [];
// arr.forEach( (el) => el % 2 == 0 ? rez.push('chet') : rez.push('nchet') );
// console.log( ...rez );
// let chet = [];
// arr.forEach( (el) =>  el % 2 == 0 ? chet.push(el) : el );
// console.log(chet);
// chet.sort( (a, b ) => b - a );
// console.log(chet);
// rez.length = 0;
// arr.forEach( (el) => el % 2 == 0 ? rez.push(...chet.splice( 0, 1 ) ) : rez.push( el ) );
// console.log( ...rez );
// chet = null;
// chet = new Array(4);
// console.log( chet[5] );
// console.log( chet );
// chet = [];
// chet.length = 3;
// console.log( chet );

// Начать предложение с большой буквы
// let str = 'мама мыла раму';
// // str = str.split('');
// str = [ str[0].toUpperCase(), str.slice(1) ].join('');
// // str[0] = str[0].toUpperCase();
// // str = str.join('');
// console.log(str);

// счастливое число. Если в числе значение какой-то цифры равно числу ее вхождений в число - число
// счастливое. Вывести наибольшее счастливое число.
// let num = 112346445355166;
// function maxHappyNumb( n ) {
//   n = [...String( n )].sort(); //Array.from( String( n ) ).sort();
//   console.log(...n);
//   let happyNumber;
//   let count = 1;
//   n.forEach( ( el, i )  => {
//       if (el == n[ i+1 ] ) { count++; return; }
//       if ( +el == count ) happyNumber = el;
//       count = 1;
//     } 
//   );
//   return ( !happyNumber ) ? '0: Все числа глубоко несчастны :(' : happyNumber;
// }
// console.log( maxHappyNumb(num) );

// Создать объект из строки. (Распарсить. Нужно!)
// const inData = "user.name.firstName=Slava&user.name.lastName=Borisov&user.favoriteColor=light%20Blue&experiments.theme=dark";
// console.log( inData );
// function objFromStr( str ) {
//   const rez = {};
//     const feelds = str.split('&'); // Разбиваем на значения свойств + пути к ним
//     for (let el of feelds) {
//       console.log( el );
//       let current = rez;
//       const feeld = el.split('.'); // Разбиваем на участки пути + свойство на последнем участке
//       for (let item of feeld ) {
//         if ( item.indexOf('=') !== -1 ) {     // если свойство содержит и значение
//           const sorce = item.split('=');      // разбить на отдельно поле и отдельно значение
//           current[sorce[ 0 ]] = sorce[ 1 ];   // совйству присвоить значение
//           break;
//         } 
//         if( !current[item] ) current[item] = {}; // если свойства с таким именем в объекте еще нет - 
//                                                  // создаем {} (т.к. когда значение не объект уже рассмотрели выше)
//         current = current[item];                 // переводим "текущее положение курсора" в объект, и так пока не
//       }                                       // наткнемся на конкретное значение свойства в виде знака "=" перед ним.
//     }
//   return rez;
// }
// console.log( 'Результирующий объект:', JSON.stringify( objFromStr( inData ), null, 3 ) );

// Числа Фибоначчи. Цикл. [1,1,2,3,5,8,13,21,34,55]
// function fib( n ) {
//   let a =1, b = 1;
//   for( let i=3; i<=n; i++) {
//     [ a, b ] = [ b, a+b ];
//   }
//   return b;
// }
// let n = 10;
// console.log('fibonachi n =', n, ':', fib(n) );

// i++ vs ++i
// for( var i = 0; i <= 5; i++) {
//   console.log('i++', i);
// }
// console.log('i++ arter', i);
// for( var i = 0; i <= 5; ++i) {
//   console.log('++i', i);
// }
// console.log('++i arter', i);
// console.log( ++i ); // прибавить потом вывести
// console.log( i++ ); // вывести потом прибавить
//
// if (function f(){}) {
//   alert(typeof f);
// }
// alert( 20e-1['toString'](2) );// основание системы счисления
// for(let i=0; i<10; i++) { // var i - выведет все 10
//   setTimeout(function() { // let i - от 0 до 9
//     alert(i); // Предполагаю, что за счет блочной видимости let i
//   }, 100); // объявляется каждую итерацию заново, а var только в начале
// }

// По мотивам красивой геометрической задачи с "парусом"
// function across() {
// const iks = [];
// const y = [];
// let znak = 0;
// let f1, f2; 
// for( let x = 0; x < 10; x +=0.0001 ) {
//   f1 = 10 - Math.sqrt( 25 - (x-5)**2 );
//   f2 = Math.sqrt( 100 - x**2 );
//   if ( f1 == f2 || znak * ( f1 - f2 ) < 0 ) { 
//     iks.push(x);
//     y.push(Math.sqrt(100-x**2));
//   }
//   znak = f1 - f2;
// }
//   console.log( iks, y );
//   return iks[1];
// }
// across();
// function hard(side, acr) {
//   let sq1, sq2, sq3; 
//   function squearCalc( func, min, max, step ) {
//     let sq = 0;  
//     for( let i = min; i < max; i += step ) {
//         sq += func( i ) * step;
//     }
//     return sq;    
//   }
//   function externalCircle( x ) {
//     return Math.sqrt( side**2 - x**2 );
//   }
//   function firstCircle( x ) {
//     return (side/2)**2 + Math.PI*25/4;
//   }
//   function secondCircle( x ) {
//     return side - Math.sqrt( (side/2)**2 - (x-5)**2 );
//   }
//   sq1 = squearCalc( externalCircle, 0, acr, 0.0001);
//   console.log( sq1 );
//   sq2 = firstCircle();
//   console.log( sq2 );
//   sq3 = squearCalc( secondCircle, 5, acr, 0.0001);
//   console.log( sq3 );
//   return  sq1 - sq2 - sq3; 
// }
// let rez = hard(10, 8);
// console.log( rez );
// rez = hard( 10, across());
// console.log( rez );

// Проверяем работоспособность формулы площади сегмента круга отсекаемого хордой по заданным радиусу и длине хорды.
// Тестовые результаты - площадь, интеграл.

// function f2(x) {
//   return 0;
// }
// function f1(x) {
  // (x-2)**2 + (y+1)**2 = 4 => y = Math.sqrt( 4 - (x-2)**2 ) - 1;
//   return Math.sqrt( 4 - (x-2)**2 ) - 1;
// }
// function squear( f, range, di ) {
//   let sq = 0;
//   console.log( f, range, di );
//   for( let i = range[0]; i < range[1]; i += di ) {
//     sq += f(i) * di;
//   }
//   console.log(`squear of sigment = ${sq}`);
//   return sq;
// }
// across( f1, f2, 0, 4, 0.0001);
// let a = squear( f1, across( f1, f2, 0, 4, 0.0001), 0.00001 );
//console.log( `full circle squear ${Math.PI*4/a}`);

// Tестируем формулу!!!! Доделать как-нибудь при случае, вычисляя без интегралов, а находя точки пересечения графиков
// function across( f1, f2, min, max, dx ) { // f1, f2 - пересекающиеся функции, min, max - границы поиска точек пересечения, dx - шаг вычисления
//   let sign = 0;
//   const crosspoints = [];
//   for( let x = min; x <= max; x += dx ) {
//     let rezF1 = f1(x);
//     let rezF2 = f2(x);
//     if (( rezF1 == rezF2 ) || ( sign*( rezF1 - rezF2 ) < 0) ) {
//       console.log( `crosspoint: x= ${x} , f1(x)=${rezF1} , f2(x)=${rezF2}`);
//       crosspoints.push([x, (rezF1 + rezF2 ) / 2]);
//     }
//     sign = rezF1 - rezF2;
//   }
//   console.log('crosspoints:', crosspoints); 
//   return crosspoints;
// };
// function segmentSqwere( r, x ) {
//   console.log('segSq:',r, x);
//   let c = Math.sqrt( (x[0][0] - x[1][0])**2 + (x[1][0] - x[1][1])**2);
//   let sq = r*r*Math.asin(c/(2*r)) - (c/2)*Math.sqrt(r*r-c*c/4); // S сектора - S треугольника по формуле Герона
//   console.log(`squear of sigment by magic formula: ${sq}`);
//   return sq;
// };
// function funcGraph( r, x0, y0 ) {
//   // (x-x0)**2 + (y-y0)**2 = r*r => y = Math.sqrt( r*r - (x-x0)**2 ) + y0;
//   return Math.sqrt( r*r - (x-x0)**2 ) + y0;
// };
// // funcGraph, across, segmentSqwere, cторона квадрата, радиусы и координаты центров трех окружностей, область определения исследования, точность(шаг вычислений)
// function hardTask( fg, acr, ss, sqwereSide, extR, extX, extY, f1R, f1X, f1Y, f2R, f2X, f2Y, rangeMin, rangeMax, deltaX ) {
//   let sqExt = 0;
//   let pointA = [];
//   let pointB = [];
//   let pointC = [];
//   crossPoints = [];
//   crossPoints = acr( fg( extR, extX, extY), fg( f1R, f1X, f1Y ), rangeMin, rangeMax, deltaX );
//   pointA = [crossPoints[0][0], crossPoints[0][1]];
//   pointB = [crossPoints[1][0], crossPoints[1][1]];

// }
// let b = segmentSqwere( 2, across( f1, f2, 0, 4, 0.000001) );

// Промисы
// сдал ли экзамен
// const passexam = false;
// // промис
// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     passexam ? resolve('Папа подарил 100$.') : reject('Папа не подарил 100$.');
//   }, 5000);
// });

// result
//   .then(value => {
//     console.log(result);
//     console.log(value);
//   })
//   .catch(value => {
//     console.log(result);
//     console.error(value);
//   });

//let a = Math.max(...arr);
//let a = Math.max.apply(null, arr); // Работает!
//let a = arr.findMax(); // Нет такого метода
//let a = arr.reduce(function(prev, item) { return Math.max(prev, item) }); // Работает!
//let a = arr.reduce((prev, item) => Math.max(prev, item) ); // Работает!
//let a = (1,5 - 1) * 2;

// let user = {
//   name: "Вася",
//   age: 30,
//   _password: "***"
// };

// user = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith('_')); // Возвращает массив ключей [ 'name', 'age' ]
//   }
// });

// ownKeys исключил _password
// for(let key in user) alert(key); // name, затем: age

// аналогичный эффект для этих методов:
// alert( Object.keys(user) ); // name,age
// alert( Object.values(user) ); // Вася,30
// let o = {};
// let i = o;
// o = new Proxy(o, {});
// alert( i == o );

console.log(123);
console.log('123');
console.log(true);
console.log(NaN);
console.log(undefined);
console.log(null);
console.log(Infinity);

document.write(123);
document.write("<br>");
document.write('123');
document.write("<br>");
document.write(true);
document.write("<br>");
document.write(NaN);
document.write("<br>");
document.write(undefined);
document.write("<br>");
document.write(Infinity);
document.write("<br>");
document.write(`<p><b>'123'<br>123 <br>true <br>NaN <br>undefined <br>infinity</b></p>`);
