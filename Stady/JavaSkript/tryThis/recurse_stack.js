'use strict';
// Рекурсия
// 1.Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:
// function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// 1.1 Цикл.
// function sumTo( n ) {
//     let sum = 0;
//     for( let i=1; i <= n; i++ ) {
//       sum += i;
//     };
//     return sum;
// }
// 1.2. Арифметическая програессия Sum = (a(1) + a(n))*n / 2
// function sumTo( n ) {
//   return ( 1 + n ) * n / 2;
// }
// 1.3. Рекурсия
// function sumTo( n ) {
//   if ( n < 2 ) return 1;
//   return n + sumTo( n - 1 );
// }
// console.log( 'Rezult=', sumTo( 100 ) );

// 2.Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
// 1.4. Рекурсия. Перемножить числа от 1 до N
// function multTo( n ) {
//   if ( n == 1 ) return 1; 
//   return n * multTo( n - 1 );
// }
// console.log( multTo( 5 ) );

// 3.Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы: из учебника - жуть )). Лучше делать циклом.
// function fib( n ) {
//      return ( n <= 1 ) ? n : fib( n - 1 ) + fib( n - 2 );
// }
// console.log('fib3', fib(3)); // 2
// console.log('fib7', fib(7)); // 13
// console.log('fib30', fib(30)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

// 4.Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// let path = list;
// printList( list );
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?
// function printList( list ) {
//     console.log('hfp', path.value );
//     if ( path.next == null ) return;
//     path = path.next;
//     printList( path );
// }
// function printList( list ) {
//     while ( path != null ) {
//       console.log( 'cicl', path.value );
//       path = path.next;
//     }  
// }

// 5.Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.
// function printList( list ) {
//   const arrOfValues = [];
//   let path = list;
//   do {
//     arrOfValues.push( path.value );
//     console.log( ...arrOfValues );
//     path = path.next;
//   } while ( path );
//   for( let i = arrOfValues.length - 1; i >= 0; i-- ) {
//     console.log( arrOfValues[ i ] );
//   }
// };
// function printList( list ) {
//   if ( list.next ) printList( list.next );
//   console.log( list.value );
// };
