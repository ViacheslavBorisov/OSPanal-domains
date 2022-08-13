'use strict';
// Прототипы: __proto__ vs .prototype



// Приватные свойства и методы.
// class Person{
//     #name = "undefined";
//     #age = 1;
//     constructor(name, age){
//         this.#name = this.#checkName(name); // изнутри класса к приватному методу обратиться можно
//         this.setAge(age);
//     }
//     #checkName(name){
//         if(name!=="admin") return name;
//     }
//     setAge(age){
//         if (age > 0 && age < 110) this.#age = age; // изнутри класса к #age обратиться можно
//     }
//     print(){
//         console.log(`Name: ${this.#name}  Age: ${this.#age}`); // изнутри обратиться можно
//     }
// }
// const tom = new Person("Tom", 37);
// tom.print();    // Name: Tom  Age: 37
// const bob = new Person("admin", 41);
// bob.print();    // Name: Undefined  Age 41
// let personName = bob.#checkName("admin"); // ! Ошибка - нельзя обратится к приватному методу
// bob.#age = 27; // ! Ошибка - нельзя обратиться к приватному свойству
// console.log( tom.#name ); // ! Ошибка - нельзя обратиться к приватному свойству

// Статические свойства и методы
// class Person{
//     #mail = '*****';
//     static retirementAge = 65;
//     constructor(name, age, mail){
//         this.setMail(mail);
//         this.name = name;
//         this.age = age;
//     }
//     setMail(mail) {
//         this.#mail = mail; 
//     }
//     print(){ 
//         console.log(`Имя: ${this.name}  Возраст: ${this.age} Пенсионный возраст: ${this.retirementAge}`);
//         // Имя: Vasyliy  Возраст: 51 Пенсионный возраст: undefined
//         console.log(`Имя: ${this.name}  Возраст: ${this.age} Пенсионный возраст: ${Person.retirementAge}`);
//         // Имя: Vasyliy  Возраст: 51 Пенсионный возраст: 62
//     }
// }
// console.log(Person.retirementAge); // 65
// Person.retirementAge = 62;
// const vasya = new Person("Vasyliy", 51, 'mail.ru');
// console.log(vasya.retirementAge); // undefined
// console.log(Person.retirementAge); // 62
// console.log(vasya.print());
// console.log(vasya);
// for(let key in vasya) {
//     console.log( key );
// }
// console.log( Reflect.ownKeys(vasya));
// console.log( Object.getOwnPropertyNames(vasya));

// class Clock {
//     constructor({template}) {
//       this.template = template;
//     }
//     render() {
//       let date = new Date();
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
//       let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);
//       console.log(output);
//     }
//     stop() {
//       clearInterval(this.timer);
//     }
//     start() {
//       this.render();
//       this.timer = setInterval( () => this.render(), 1000);
//     }
//   }
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start(); 
//   setTimeout( () => clock.stop(), 10000 );
// //   setTimeout( () => clock.stop(), 10000 );
