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