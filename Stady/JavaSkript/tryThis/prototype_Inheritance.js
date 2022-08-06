'use strict';
// Тюнингуем console.log = alert. alert хотим чтоб отображал несколько значений, 
// и срабатывал в среде node.js
if ( globalThis.toString() == '[object global]' ) {
    global.alert = function( ...arg ) { console.log( ...arg ) };
}
if ( globalThis.toString() == '[object Window]' ) {
    let temp = alert;
    window.alert = function(...arg) { temp( arg.join(' ') ) };
}
// Тестовые данные:
// const arr = ['bu-', 'bu-', 'bu-', 'bu', 125, 17, 164, false, 'ok'];
// alert( ...arr );
// alert( 'Nu kak-cho?...', 'bla-bla-bla' );
// alert( 33 + ' korovy', 'svegaya stroka');
// alert( 'bu-', 'bu-', 'bu-', 'bu', 125, 17, 164, false, 'ok' );
// const a = {
//     name: 'a',
//     youHoHo: alert('yo-ho-ho!'),
//     sayYo() { alert('Yo!!!!' ) },
// }
// a.youHoHo; // this вроде как ведет себя адекватно :)
// a.sayYo();

// let user = {
//     name: "John",
//     surname: "Smith",
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     },
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
// };
// let admin = {
//     __proto__: user,
//     isAdmin: true
// };
  
// console.log(admin.fullName); // John Smith (*)
  
//   // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper
// console.log(admin.fullName);
// // console.log( user );
// // console.log( admin );
// let animal = {
//     eats: true,
//     walk() {
//       console.log( 'I"m from proto...' );
//     }
//   };
//   let rabbit = {
//     __proto__: animal
//   };
// //   rabbit.walk = function() {
// //     console.log("Rabbit! Bounce-bounce!");
// //   };
//   rabbit.walk(); // Rabbit! Bounce-bounce!
//   console.log( animal );
//   console.log( rabbit );

// методы animal THIS в прототипах
// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         console.log(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
//   console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)
//   rabbit.walk();    // I walk - изначально кролик гуляет
//   rabbit.sleep();   // модифицирует rabbit.isSleeping - разрешаем спать именно кролику
//   console.log(rabbit.isSleeping); // true
//   rabbit.walk();    // кролик спит
//   console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)
//   animal.walk();    // I walk - но животные вообще - гуляют.
//   animal.sleep();   // модифицируем animal.isSleeping - разрешаем спать всем животным, наследникам animal
//   console.log(rabbit.isSleeping); // true - все спят
//   console.log(animal.isSleeping); // true - все спят
//   console.log( rabbit.__proto__ );
//   function func() {};
//   console.log( func.prototype );

// Constructors F.prototype
// function Rabbit() {}
// console.log( Object.getOwnPropertyDescriptor( Rabbit, 'prototype' ) );
// console.log( Object.getOwnPropertyNames( Rabbit ) );
// console.log( Object.getOwnPropertyNames( Rabbit.prototype ) );
// console.log( Rabbit.prototype.constructor );
// Rabbit.prototype = {
//   eats: true
// };
// console.log( Rabbit.prototype );
// console.log();
// let rabbit = new Rabbit();
// console.log( Object.getOwnPropertyDescriptor( rabbit, 'prototype' ) );
// console.log( Object.getOwnPropertyNames( rabbit ) );
// // console.log( Object.getOwnPropertyNames( rabbit.prototype ) );
// // console.log( rabbit.prototype.constructor );
// Rabbit.prototype = {};
// // Rabbit.prototype.eats = false;
// // delete rabbit.eats;
// // delete Rabbit.prototype.eats;
// // записали в кк в прот объект ест: да
// // создали ок из кк.
// console.log( rabbit.prototype );
// console.log( rabbit );
// console.log( rabbit.eats ); // ?

// const a = { value: 3 };
// const b = { __proto__: a };
// console.log(b.value);
// a.value = 5;
// console.log(b.value);

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
// но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?
const obj = new Object();
// obj.constructor = function( name ) {
//     this.name = name;
//     // this.constructor = this.constructor;
// }
// let obj2 = new obj.constructor('obj2');
// let obj3 = new obj2.constructor('obj3');
// let obj4 = new obj3.constructor('obj4');
// let obj5 = new obj2.constructor('obj5');
// // Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// // И пример функции-конструктора, с которой такой код поведёт себя неправильно.
// console.log('obj=', obj);
// console.log('obj2=', obj2);
// console.log('obj3=', obj3);
// console.log('obj4=',obj4);
// console.log('obj5=', obj5);

// __proto__ безнадежно устарело. Сейчас в моде современные методы работы с прототипами.
// let animal = {
// eats: true
// };
// // создаём новый объект с прототипом animal 
// let rabbit = Object.create(animal); // rabbit = {} с единственным свойством [[Prototype]] = animal, 
// // можно указать дескрипторы через запятую после [[Prototype]]
// alert(rabbit.eats); // true
// alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}
// alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit - false, т.к. {}
// let kangaroo = Object.create(animal, { // добавляем дескрипторы
//     jumps: {
//       value: true
//     }
//   });
//   alert(kangaroo.jumps); // true

// Добавить toString в словарь
// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. 
// Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
// Вот так это должно работать:
let dictionary = Object.create(null);
Object.defineProperty( dictionary, 'toString', { // бл*ь! Целую ночь... toString пиши в кавычках: 'toString'
        value: function() {
            return Object.keys( this ).join();
        },
        writable:true, 
        enumerable: false,
        configurable: true,
    } 
);
// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}
// ваш метод toString в действии
alert( dictionary ); // "apple,__proto__"

