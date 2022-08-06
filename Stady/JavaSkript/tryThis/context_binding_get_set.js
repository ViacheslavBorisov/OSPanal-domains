// let user = {
//     objName: 'user',
//     firstName: "Вася",
    
// };
// let kettle = {
//     objName: 'kettle',
//     firstName: "Slava",
//     innerObj: { objName: 'kettle.innerObj' },
// };
// function sayHi(x = this.firstName, y = this.objName) {
//     console.log(`Привет, ${x}! Ты в объекте: ${y}`);
//     console.log( 'decoration:', this == global ? 'global' : this.objName );
// };
// function decor( func, ...boundArgs ) {   // boundArgs - аргументы, которые нужно привязать
//     return function wrapper( ...args ) { // args - аргументы, которые не нужно привязывать
//         // console.log( 'decoration:', this == global ? 'global' : this.objName, ';  defoult:', ...boundArgs );
//         return func.call( this, ...args, ...boundArgs );
//     }
// }
// user.sayHi = sayHi;
// user.sayHi = decor( user.sayHi, user.objName);
// user.sayHi();
// kettle.innerObj.sayHi = sayHi;
// kettle.innerObj.sayHi = decor( kettle.innerObj.sayHi, kettle.objName );
// kettle.innerObj.sayHi( kettle.firstName );
// var obj1 = {
//     hello: function() {
//       console.log('Hello world: this= ', this );
//       return this;
//     },
//     obj2: {
//         breed: 'dog',
//         speak: function(){
//               console.log('woof!    : this= ', this );
//             //   return this;
//           }
//       }
//   };
   
// //   console.log(obj1);
// //   console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
// //   console.log(obj1.obj2);
// //   console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2
//   console.log( 'direct call ( without console.log() ):' );
//   obj1.hello();
//   obj1.obj2.speak();
//   console.log( 'aftir decoration:');
//   obj1.hello = decor( obj1.hello );
//   obj1.hello();
//   obj1.obj2.speak();
// setTimeout(user.sayHi, 1000); // Привет, undefined!
// setTimeout(user.sayHi.bind( user, user.firstName ), 1000); // Привет, Вася!
// setTimeout(() => user.sayHi(), 1000); // Привет, Петя!
// user.firstName = "Петя";
// Если нужно привязать аргументы, но не привязывать контекст (например для методов объекта),
// то поможет только обертка, т.к. bind такого варианта не предусматривает. 


// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: 'Вася',
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// // askPassword(user.loginOk, user.loginFail); // не выводит "Вася", гадина :(
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // исправленная, НО РАБОТАЕТ :)))
// IS_DONE

// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: 'John',
//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };
// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
// IS_DONE

// Стрелочные функции
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//       console.log( this == global ? 'global' : this ); // this метода объекта = объект
//       this.students.forEach(  // массив students находит, но внутри forEach за счет выражения или блока кода теряем this для title
//         function(student) { console.log( this == global ? 'global' : this ); console.log(this.title + ': ' + student) }
//       );
//       this.students.forEach(
//         student => console.log(this.title + ': ' + student) // а в стрелочной функции this берется "снаружи". Ближайшая "наружа" -
//         // this метода showList = объекту group
//       )
//     }
//   };
//   group.showList();
// результат:
// global
// undefined: John
// global
// undefined: Pete
// global
// undefined: Alice
// Our Group: John
// Our Group: Pete
// Our Group: Alice

// GET & SET
// let user = {
//   name: "John",
//   surname: "Smith"
// };
// Object.defineProperty(user, 'fullName', { // задаем св-во fullName состоящее из
//   get() {                                  // флага get - вернет имя и фамилию в одной строке
//     return `${this.name} ${this.surname}`;
//   },
//   set(value) {                             // флага set - получит строку, разберет ее на значения существующих св-в.
//     [this.name, this.surname] = value.split(" ");
//   }                                      // enumerable & configurable явно не указаны, значит false.
// });
// Object.defineProperty( user, 'surname', { enumerable: false, configurable: true} );
// // Object.defineProperty( user, 'surname', { writable: false} );
// user.surname = "Pupking";
// console.log( user.surname );
// console.log(user.fullName); // John Smith
// Object.defineProperty( user, 'FullName', { enumerable: true} );
// for(let key in user) console.log(key); // name, surname, - а реально св-ва fullName в объекте нет.
// let props = Object.getOwnPropertyDescriptors( user );
// console.log( JSON.stringify( props, null, 2 ) );