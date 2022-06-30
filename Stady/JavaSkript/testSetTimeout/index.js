// Промисы: задать глобальную переменную, сделать 2 - 3 таймера на 5, 10, 15 сек в разных функциях. 
// Присваивать этой переменной различные значения. Выводить время присваивания и интервалы времени между
// присваиваниями. 
// Определить: будет ли выводиться значение console.log(), если переменная не определена. Будут ли выполняться
// действия с этой переменной (можно ли сложить что-то с undefined). И т.д. 
// А теперь смотрим GIT :)

function showCount(timeLimit) {
//    console.log('Counter', timeLimit, 'is run...');
    for (let i = 1; i <= timeLimit; i++) {
        timer(i);
    }
    function timer(sec) {
        let msec = sec * 1000;
        setTimeout(() => console.log('count', timeLimit, '=  ', sec), msec);
    }
}

/* Without promices */
// Даже первый счетчик блокируется alert.
// const time1 = 5;
// const time2 = 3;
// const time3 = 2;
// const time4 = 4;
// showCount( time1 );
// setTimeout( () => {
//     showCount( time2 );
//     setTimeout( () => {
//         showCount( time3 );
//         setTimeout( () => {
//             showCount( time4 );
//             setTimeout( () => {
//                 console.log( 'This count has done' );            
//                 },  time4 * 1000 
//             );
//             }, time3 * 1000 
//         );
//         }, time2 * 1000 
//     );    
//     }, time1 * 1000 
// );


/* Use promices */
// И тут первый счетчик блокируется alert - работает, но результат не выводится ((                                     
async function timer (sec) {
    let msec = sec * 1000;    
    let variable = new Promise((resolve, reject) => {
            setTimeout(() => console.log('Counter', sec, 'is run'), 1000);
            setTimeout(() => resolve(), msec);            
            showCount(sec);
            })    
    await variable;     
    return 'Vasya';
}

timer(7)
    .then( value => { 
        if ( value == 'Vasya' ) 
        timer(2)
            .then( value => { 
                if ( value == 'Vasya' ) 
                timer(3)
                    .then( value => { 
                        if (value == 'Vasya') timer(4)
                    })
            })
    });

alert('Ну че - как?');






// const timerPromise = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//   console.log('Timer starts')
//   const startTime = performance.now()
//   await timerPromise()
//   const endTime = performance.now()
// // performance.now() - возвращает текущее время.
//   console.log('Timer anded', endTime - startTime)
// }

// asyncFn() 

// console.log('Finish of the skript')


// Код работает, но каждый раз с разными результатами. Таймеры - ГЕМОРОЙ!!! :)
// function countVeue(sec) {    // визуализирует счет в консоли раз-два-три...
//     console.log('Начало отсчета...');
//     count = 0;
//     counter();
//     function counter() {
//         if (count < sec) { setTimeout(counter, 1000) };
//         console.log('count  ', count);
//         count++;
//     }
// }

// function timer(sec) {
//     console.log('Таймер установлен на ', sec, 'секунд');
//     let msec = sec*1000;
//     countVeue(sec);
//     setTimeout(nullFunk, msec);
//     function nullFunk() {
//         console.log('Прошло', sec, 'секунд');
//         sec--;
//         if (sec > 0) {timer(sec)} else {console.log('Завершение работы программы')};
//     };
// }

// timer(5);

