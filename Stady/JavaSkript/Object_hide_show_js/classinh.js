/*class Animal {
    constructor(options) {
        this.name = options.name,
        this.age = options.age,
        this.hasTail = options.hasTail
    }
    voice() {
        console.log('I am a',this.name,'. Hellow! I am ', this.age, 'years old. I am ', this.color)
    }
}

const animal = new Animal ({
    name: 'Dog',
    age: 8,
    hasTail: true
})

class Cat extends Animal {
    static animalTipe = 'CAT'
    constructor(options) {
       super(options)
          this.color = options.color
    }
    voice() {
        super.voice()
        console.log('New method')
    }
    
    get realAge() {
         return this.age * 3
    }
    set realAge(newAge) {
        this.age = newAge
    }
 }
 const cat = new Cat ({
    name: 'Cat',
    age: 3,
    color: 'white and pussy :)'    
})
const nextCat = new Cat ({
    name: 'cat Vasya',
    age: 12,
    color: 'green and warty :('
})
cat.realAge = 4
nextCat.voice()
console.log(nextCat.realAge)
cat.voice()
console.log(cat.realAge)*/
// let vtf = alert('Hellow!')
// alert(`Ты ввел:  ${vtf}`)
// let param = prompt('Введи количество вершин, размер, цвет через пробел')
// alert(`Ты ввел:  ${param}`)
// let ask  = confirm("Привет, нажмешь что-нибудь?")
// alert(`Ты ввел:  ${ask}`)
//  Call-back ФУНКЦИИ:
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }  
//   function showOk() {
//     alert( "Вы согласны." );
//   }  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);

// НАЧАЛО ОТЛАЖИВАЕМОЙ ПРОГРАММЫ!!!!!!!!!!!!!!!
class Component {
    constructor(selector) {
    this.$el = document.getElementById(selector)
    }
    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size  + 'px'
        this.$el.style.background = options.color    
    }   
}
class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const boxA = new Box ({
    selector: '#aaa',
    size: 100,
    color: 'red'
})
const boxD = new Circle ({
    selector: '#bbb',
    size: 80,
    color: 'yellow'
})
const boxB = new Box ({
    selector: '#bbb',
    size: 120,
    color: 'green'
})
const boxC = new Circle ({
    selector: '#ccc',
    size: 100,
    color: 'blue'
})

/*
// ПРИМЕЧАНИЯ:
// Важно! Не удалось найти блок по ID при помощи
// document.querySelector(selector)
// работает только:
// document.getElementById(selector)
// разобраться чо-как :)

// Проверка, работает ли код на сервере или в браузере:
if (typeof window !== 'undefined') {
    console.log('Browser!!!')
} else {
    console.log('Server!&&&')
}

// Вывод надписи на страницу в браузере
let div = document.createElement('div')
div.className = 'alert'
div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.'
document.body.append(div)

 // получить элемент по ID
 let elem = document.getElementById('#aaa')
 // сделать его фон красным и т.д.
 elem.style.height = 100 + 'px'
 elem.style.width = 150 + 'px'
 elem.style.background = 'red';
*/