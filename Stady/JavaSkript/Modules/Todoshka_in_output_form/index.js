// Сделано по видео: https://www.youtube.com/watch?v=CqA_Tw_5Q-o&ab_channel=SergeyDmitrievsky
// Привязываемся к тегам в index.html по заданным там классам
// Узел дива, куда выводится массив из предстоящих дел
const todoNode = document.querySelector('.js-todoshka')
// Поле ввода текста инпут
const inputNode = document.querySelector('.js-input')
// Кнопка "Добавить забот"
const buttonNode = document.querySelector('.js-button')
// alert(`${todoNode}`);
// todoshka - массив из предстоящих дел (их еще надо ввести)
let todoshka = [];
// Добавить дело (имя, ай-ди, сделано-не сделано)
function addTodo(text) {
    const todo = {
        text,
        id: `${Math.random()}`,
        done: false
    };
    todoshka.push(todo);
}
// Удалить дело (найти элемент массива по айди и пометить как сделанное)
function delTodo(id) {
    todoshka.forEach(todo => {
        if (todo.id == id) {
            todo.done = true;
        } 
    })
}
// Отобразить результаты работы (пользовательский интерфейс)
function render() {
//  Вывести рабочие данные в консоль разработчика
    console.log(todoshka);
// Вывести информацию на страницу сайта: сделано - не печатаем
// не сделано - печатаем
    let text = '';
    todoshka.forEach(todo => {
        if (todo.done) {
            return;            
        };
        text += `
        <div>
            <button data-id='${todo.id}'> Готово </button>
            ${todo.text}
        </div>`;
    })
// Находит в index.html див к которому привязан todoNode
// и выводит туда строку из переменной text (див с текстом вкладывают в див)
    todoNode.innerHTML = text;    
}
// Интерактивный пользовательский интерфейс
// Обработчик события 'click' реагирует на нажатие кнопки
// При этом из поля ввода значение попадает в константу text
// Добавляется в список дел функцией addTodo, поле ввода очищается
// Страница (див привязанный к todoNode) - обновляется.
buttonNode.addEventListener('click', () => {
    const text = inputNode.value;
    addTodo(text);
    inputNode.value = '';
    render();
})
// Удалить строку по нажатию кнопки "Готово": т.к. строк и кнопок изначально нет 
// на странице (создаються динамически), то событие будем обрабатывать на родительском контейнера
// event - чтобы убедиться что клик произошел действительно на нашей кнопке.
todoNode.addEventListener('click', (event) => {
// Если тэг произошел не на кнопке, то ничего не делаем
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
// если на кнопке - достаем айди кнопки по которой произошел тык
    const id = event.target.dataset.id;
// вызываем удаление по айди...
    delTodo(id);
// обновляем страницу (див со списком)
    render();

})