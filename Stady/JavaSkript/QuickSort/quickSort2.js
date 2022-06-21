// Быстрая сортировка. Вариант работы через браузер.
// Для работы через консоль - раскоментировать строки
// ниже и закоментировать все "alert()" и "prompt()"

// const arrString = '12 64 152 77 3 21 875 1 22'
// console.log('Input data: ', arrString)
const arrString = prompt('Введите элементы массива для сортировки через пробел')
alert(`${typeof arrString}`)
const arrChar = arrString.split(' ')
// console.log('let arrChar = arrString.split(" ") = ', arrChar)
alert('arrChar после Split:')
alert(`${arrChar}`)
alert(`${typeof arrChar}`)
const arrNumber = [];
arrChar.forEach(item => arrNumber.push(Number(item)))
alert('arrNumber после Number:')
alert(`${arrNumber}`)
alert(`${typeof arrNumber}`)
// console.log('After Number() =', arrNumber)

const qSort = (arr) => {
    if (arr.length < 2) {
        return(arr)
    } else {
        const markElem = arr[Math.floor(Math.random() * arr.length)]
        const less = arr.filter(value => value < markElem)
        const more = arr.filter(value => value > markElem)
        return [...qSort(less), markElem, ...qSort(more)]
    }      
}

const arrCharSort = qSort(arrNumber)
// console.log(arrCharSort)
alert('Внимание... Ответ:')
alert(`${arrCharSort}`)