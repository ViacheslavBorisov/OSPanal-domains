// Проба поработать с методом this.
// this - это не имя объекта (ссылка) - это и есть весь объект.
// У объектов НЕТ ИМЕН!!!

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



