// const arr = [ 1, -3, 8, 15, 1, 1, 8, 0, -15, -3 ];
// console.log( ...arr );
// let rez = new Set();
// arr.forEach( el => rez.add( el ) );
// rez = Array.from( rez );
// console.log( ...rez );
// // Идиотская  запись. Разбираюсь.
// let a = undefined || 5;
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