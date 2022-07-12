'use strict';

// 1.Создайте объект для даты 20 февраля 2012 года, 3 часа 12 минут. Временная зона - местная.
// console.log( new Date( '2012-02-20T03:12'));
// let d = new Date(2012, 1, 20, 3, 12);
// console.log( d );
// В браузере отображается корректно, а в code runer VSCode видать utc не установлено

// 2.Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// Например:
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
// function getWeekDay( dat ) {
//     const weekDays = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
//     return weekDays[ dat.getDay() ];
// };
// console.log( getWeekDay( date ) );

// 3.В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
// let date = new Date(2012, 0, 1);  // 3 января 2012 года
// console.log( getLocalDay(date) );       // вторник, нужно показать 2
// function getLocalDay( dat ) {
//    let day = date.getDay( dat );
//    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//     day = 7;
//   };
//   return day;
// };

// 4.Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:
// let date = new Date(2015, 0, 2);
// date = new Date( date.getTime() );
// console.log( 'date', date );
// let daysAgo = 1460;
// // console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// // console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// // console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// // P.S. Функция не должна изменять переданный ей объект date.
// function getDateAgo( dat, ago ) {
//     let absTime = dat.getTime(); // ms
//     let absAgo = ago * 1000 * 3600 * 24; // ms
//     let absThatTime = absTime - absAgo; // ms
//     let thatTime = new Date( absThatTime );
//     return thatTime; // Возвращаем не число (как в задании), а всю дату - так красимше )
// };
// console.log( 'Исходная дата          ', date );
// console.log( `${daysAgo} дней назад было    ${getDateAgo( date, daysAgo)}`);

// 5.Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
// function getLastDayOfMonth(year, month) {
//     const ym = new Date( year, month );
//     const extrimeDate = [ 29, 30, 31, 32 ];
//     for( let date of extrimeDate ) {
//         ym.setDate( date );
//         if ( month !== ym.getMonth() ) return date - 1;
//     };
//     return ( 'Странно... Не сработало... :(' );
// };
// Решение из учебника:
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0); // даты 0 не бывает - автоисправление:
//     return date.getDate();      // это последнее число предидущего месяща.
//   }
// console.log( getLastDayOfMonth( 2015, 8 ) );

// 6. Форматированный вывод:
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:
// console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// console.log( formatDate( new Date(2022, 6, 3, 18, 1 ) ) );
// // // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
// function formatDate( date ) {
//     const now = new Date();
//     const diff = now.getTime() - date.getTime();
//     if ( diff < 1000 ) return 'прямо сейчас';
//     if ( diff < 60000 ) return `${diff/1000} сек. назад`;
//     if ( diff < 3600000 ) return Math.floor( diff / 60000 ) + ' мин. назад';
//     let day, month, hours, minutes;
//     ( date.getDate() < 10 ) ? day = '0' + date.getDate() : day = date.getDate();
//     ( date.getMonth() < 10 ) ? month = '0' + date.getMonth() : month = date.getMonth();
//     ( date.getHours() < 10 ) ? hours = '0' + date.getHours() : hours = date.getHours();
//     ( date.getMinutes() < 10 ) ? minutes = '0' + date.getMinutes() : minutes = date.getMinutes();
//     return day + '.' + month + '.' + date.getFullYear() + ', ' + hours + ':' + minutes;
// }
// console.log( formatDate( new Date() ) );

//Установка даты
// let now = new Date(); // объект всегда будет содержать текущее время и дату
// let old = new Date( 0 ); // милисекунд с 1.01.1970
// let old_add24houars = new Date( 24 * 3600 * 1000 );
// let old_redus24houars = new Date( -24 * 3600 * 1000 );
// console.log( now );// current date
// console.log( old ); // 1.01.1970
// console.log( old_add24houars );// 2.01.1970
// console.log( old_redus24houars );
// let date = new Date( '1962-01-14' );
// console.log( date );
// date = new Date( 2032, 0, 14, 12, 0, 15, 672 );
// console.log( date );
// // Получение даты
// console.log( now.getMilliseconds() );
// console.log( now.getFullYear() );
// console.log( now.getDate() );
// console.log( now.getUTCDay() );
// console.log( now.getHours(), ':', now.getMinutes() );
// console.log( now.getMinutes() );
// console.log( now.getTime() ); // сколько мс прошло с 1.01.1970
// console.log( now.getTimezoneOffset() ); // разница с Гринвичем
// const a = 1657579596; // мс с 1970 г
// console.log( a / (60*60*24*364.75)); // 52,59 лет - примерно равно :)
// now.setMilliseconds( 333 );
// console.log( now );

// Таймеры
// setTimeout( () => console.log( 'Сработал таймаут 2 сек', 2000 ) );
// let timer = new Date ( now.getTime() + 1000 );
// let startTime = new Date( now.getTime() );
// console.log( "Now", now );
// console.log( 'timer', timer );

// while ( now.getTime() < timer.getTime() ) {
//      now = new Date();
// };
// console.log( 'Прошло...', timer.getTime() - startTime.getTime(), 'sec' ); // выводит правильную дату

// Автоисправление
// let date = new Date();
// console.log( date );
// date.setSeconds(date.getSeconds() + 70); // + 1 sec + 10 ms
// console.log( date ); // выводит правильную дату

// console.log( Date.now() ); // Результат в мс от рождества метода (1.01.1970 )
// let current = new Date; // Время считается по Гринвичу
// console.log( current.getTimezoneOffset() ); // Date.now() - не объект, так что узнать УТС из него не выйдет
// const utc = current.getTimezoneOffset();  // а из созданного через new Date() - выйдет
// console.log( new Date( Date.now() ) + utc ); // красивый вывод даты

// now = new Date( 1327611110417 );
// console.log( now );
// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// console.log(ms); // 1327611110417 (таймстамп)
// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
// console.log( date );

// Пытаемся увидеть свойства объкта Date
// let old = new Date( 0 ); // 1.01.1970
// let user = {
//   name: "John",
//   money: 1000,
//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// }; 
// console.log( Object.keys( old ).length );
// console.log( Object.keys( user ).length );
// console.log( Reflect.ownKeys( user ) );