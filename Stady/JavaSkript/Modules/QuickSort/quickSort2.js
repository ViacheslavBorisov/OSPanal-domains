// Быстрая сортировка. Вариант работы через браузер.
// Для работы через консоль - раскоментировать строки
// ниже и закоментировать все "alert()" и "prompt()"

// Привязываем JS к полям html документа
const inputArr = document.querySelector('.js-input')
const inputButton = document.querySelector('.js-button')
const outputArr = document.querySelector('.js-outsort')

function qSort(arr) {
    if (arr.length < 2) {
        return(arr)
    } else {
        const markElem = arr[Math.floor(Math.random() * arr.length)]
        const less = arr.filter(value => value < markElem)
        const more = arr.filter(value => value > markElem)
        const equal = arr.filter(value => value == markElem)
        return [...qSort(less), ...equal, ...qSort(more)]
    }      
}

// НЕМНОГО ПОЛЬЗОВАТЕЛЬСКОГО ИНТЕРФЕЙСА
// Получает строку, делит на символы бeз ' ', преобразует в цифры
function getArray(arrString) {    
    const arrChar = arrString.split(' ');
    const arrNumber = [];
    arrChar.forEach(item => arrNumber.push(Number(item)));
    return arrNumber;
}
// Выводит массив в див с классом outputArr
function render(arrCharSort) {
    outputArr.innerHTML = [...arrCharSort];
}
// Обработчик события: по "клику" на кнопку забирает строку,
// преобразует в цифры сортирует и отправляет для вывода
inputButton.addEventListener('click', () => {
    const arrString = inputArr.value;
    const arrCharSort = qSort(getArray(arrString));
    render(arrCharSort); 
})

