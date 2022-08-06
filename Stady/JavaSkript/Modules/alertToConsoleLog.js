// 1. Позволяет выводить в консоль в node.js данные метода "alert", 
// т.к. замаялся испровлять при копировании задач, а с браузером работать - мука :)
// 2. Позволяет выводить при помощи метода "alert" в браузере не только одну строку, 
// но  наборы аргументов и массивы, т.к. я привык так писать в "console.log" :)
if ( globalThis.toString() == '[object global]' ) global.alert = function( ...arg ) { console.log( ...arg ) };
if ( globalThis.toString() == '[object Window]' ) {
    let temp = alert;
    window.alert = function(...arg) { temp( arg.join(' ') )};
}
// Примеры использования:
const arr = ['bu-', 'bu-', 'bu-', 'bu', 125, 17, 164, false, 'ok'];
alert( ...arr );
alert( 'Nu kak-cho?...', 'bla-bla-bla' );
alert( 33 + ' korovy', 'svegaya stroka');
alert( 'bu-', 'bu-', 'bu-', 'bu', 125, 17, 164, false, 'ok' );
const a = {
    name: 'a',
    youHoHo: alert('yo-ho-ho!'),
    sayYo() { alert('Yo!!!!' ) },
}
a.youHoHo; // this вроде как ведет себя адекватно :)
a.sayYo();