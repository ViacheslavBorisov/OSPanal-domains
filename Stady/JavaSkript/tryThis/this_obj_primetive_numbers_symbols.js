// 'use strict';
// 1.Проба поработать с методом this.
// this - это не имя объекта (ссылка) - это и есть весь объект.
// У объектов НЕТ ИМЕН!!!
// this объекта определяется объектом, внутри которого this находится.
// this функции определяется местом, откуда функция вызвана (и не важно где она находится)!
// 2.Сравнить способы объявления переменных var и let
// 3.Поиграться с символами Symbol("name")
// 4.Преобразование объектов в примитивы
// 5.Быстрая сортировка. (Хорошо написана).
// 6.Работа с числами

//Генератор случайного числа от мин до макс
// Поскольку округляем вниз, то max-min+1
// function rundom( min, max ) {
//     return min + Math.floor( ( max - min + 1 ) * Math.random() ); 
// }
// let i = 0;
// // Нагенерируем 1000 чисел - посмотрим насколько равномерно генерирует
// let arr = [];
// while ( i < 1000 ) {
//     arr.push( rundom( 0, 10 ) );
//     i++;
// }
// // Зададим массив счетчиков для каждого числа
// let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// // И посмотрим сколько какого нагенерировало
// arr.forEach( el => {
//         switch ( el ) {
//         case 0 : count[0]++;
//         break;
//         case 1 : count[1]++;
//         break;
//         case 2 : count[2]++;
//         break;
//         case 3 : count[3]++;
//         break;
//         case 4 : count[4]++;
//         break;
//         case 5 : count[5]++;
//         break;
//         case 6 : count[6]++;
//         break;
//         case 7 : count[7]++;
//         break;
//         case 8 : count[8]++;
//         break;
//         case 9 : count[9]++;
//         break; 
//         case 10 : count[10]++;
//         break; 
//         default : arrError.push( el );     
//         }
//     } );
// for( let j = 0; j < 11; j++) {
//     console.log( `Число ${j} встречается ${count[ j ]} раз` );
// }

// Ввод числового значения. Решение из учебника. Для isFinite(null) и isFinite('')
// - вполне обычные числа!!!
// function readNumber() {
//     let num; 
//     do {
//       num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );  
//     if (num === null || num === '') return null;  
//     return +num;
//   }  
//   alert(`Число: ${readNumber()}`);

// Ввод числового значения: переспрашивает "Введите число", пока не введешь 
// число, если ввести "пустую строку" или нажать "отмена" - выход из программы.
// function readNumber() {
//     let value = prompt( 'введите число', '' );
//     if ( value ==  '' || value == null ) {
//         return null;
//     };
//     if ( isFinite( +value ) ) {
//         return +value;
//     } else {
//         value = readNumber();
//         return +value;
//     };
// };

// alert( readNumber() );


// Быстрая сортировка здорового человека - не теряет одинаковые элементы массива.
// const array = [2, 17, 54, 0, 3, 0, 7, -26, 7, -15, 0, 0];
// console.log( ...array, 'arr.length=', array.length );
// function qSort( arr ) {
//   if ( arr.length < 2 ) {
//     return arr;
//   } else {
//     const supEl = arr[ Math.floor( arr.length / 2 ) ];
//     const less = arr.filter( el => el < supEl );
//     const more = arr.filter( el => el > supEl );
//     const equal = arr.filter( el => el == supEl );
//     return [ ...qSort( less ), ...equal, ...qSort( more ) ];
//   }
// }

// const arrSort = qSort( array );
// console.log( ...arrSort, 'arrSort.length=', arrSort.length );

// Try about SymbolToPrimitive transformation
// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// }; 

// // демонстрация результатов преобразований:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500


// Try about symbols (Label)
// let sym1 = Symbol("sym1Name");
// let sym2 = Symbol("sym1Name");
// // sym2 = sym1;
// if ( sym2 == sym1 ) {
//   console.log( 'ravno!' );
// } else {
//   console.log( 'not equal' );
// };
// let uid = Symbol("symbad");
// console.log(typeof uid);
// let gid = Symbol("cziclop");
// console.log(typeof gid);
// // alert(uid.toString());
// // alert(uid.description);

// const boock = {
//   pageNumber: 632,
//   interest: true,
//   color: 'green',
//   [uid]: 5508,
// };
// boock[gid] = 6602;
// Object.assign( obj1, obj2 ) - создает один объект из 2х
// const newBoock = Object.assign( {}, boock );

// console.log(Object.keys(boock));
// console.log(boock[uid]);
// for( propertys in boock) {
//     console.log( typeof propertys );
//   console.log( propertys, boock[propertys]);
// }
// console.log( newBoock[gid] );
// console.log( Object.getOwnPropertySymbols(newBoock) );
// console.log( Reflect.ownKeys(boock) );

// Try about difrences before var & let
// function tryVarLet() {
//   {
//     var i = 15;
//     console.log('in for',i);
//   }
//   console.log('after for',i);
// }
// // console.log('after function',i);
// tryVarLet();
// // console.log('after function',i);


// Try about constractors with "this"
// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('Введи, что будем аккумулировать', 0);
//   };
// }

// let accumulator = new Accumulator(0);
// accumulator.read();
// accumulator.read();
// alert("Нааккумулировали :" + accumulator.value);

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('Input a:', 0);
//         this.b = +prompt('Input b:', 0);
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
    
//     this.mul = function() {
//       return this.a * this.b;
//     };   
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum = " + calculator.sum() );
//   alert( "Mul = " + calculator.mul() );

// const stayway = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   show() {
//     alert( this.step );
//     return this;
//   },
// }

// stayway.up().up().up().show();
// stayway.up();
// stayway.show();
// alert( stayway );


// let calculator = {
//   read() {
//     this.a = +prompt('a',0);
//     this.b = +prompt('b',0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();  
// alert("Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );

// "use strict";
// console.log( 'Global object:', this );
// console.log( 'In a functions:' );
/*const rez = [];
let i = 0;
const obj_0 = {
    name : 'obj_0',
    aaa : 10,
    ddd : funct,
    eee : this,
}
const obj_1 = {
    name : 'obj_1',
    fff : 14,
}
function funct() {
    this.prop = i
    if ( this !== global ) console.log( i, this );
    i++; 
    return this;
}
rez[i] = funct();
rez[i] = new funct();
rez[i] = obj_0.ddd();
rez[i] = funct.call( obj_0 );
rez[i] = obj_0.ddd.call( obj_1 );
rez[i] = obj_0.eee; console.log( i, rez[i] );
console.log( rez[ 4 ] === rez[ 1 ] ? 'All right!' : 'WTF?!!' );
*/

// function makeCounter() {
//     makeCounter.count = 0;
//     return function() {
//     //   if ( this !== global ) console.log( this );
//       return makeCounter.count++; // есть доступ к внешней переменной "count"
//     };
// }
// let counter = makeCounter();
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter() ); // 2