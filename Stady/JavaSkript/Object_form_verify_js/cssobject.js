// Задача: при введении параметров на экране возникает фигура:
// Параметры: видимость, размер, цыет, количество вершин(форма)
// При необходимости, какой-то из параметров можно изменить

// Выбираем элемент один из блоков 
// по значению "селектор"
// В нашем примере селектор: id="figure"
const number = prompt('Введите количество вершин: ')
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

class Form extends Component {
    constructor(options) {
        super(options.selector)
        alert(`${options.selector}`)
        this.$el.style.height = this.$el.style.width = options.size + 'px'
        alert(`${this.$el.style.height}`)
        alert(`${this.$el.style.width}`)        
        this.$el.style.background = options.color
        alert(`${this.$el.style.background}`)
        const type = typeof options.pickNumber
        alert(`${options.pickNumber}, ${type}`) 
        switch (options.pickNumber * 1) {
// Circle            
            case 0:
                this.$el.style.borderRadius = '50%'             
            break
// Point
            case 1:
                this.$el.style.height = this.$el.style.width = '10px'
            break
// Otrezok
            case 2:
                this.$el.style.height = '10px'
            break
// Triangle
            case 3:
            
            break
// Squere
            case 4:
            
            break
            default: 
                alert('Оператор switch не сработал :(')
        }

    }
}

alert('Neare object')

const figure  = new Form ({
    selector: '#fig',
    size: 150,
    pickNumber: number,
    color: 'blue'
})



// class Color {
//     constructor(color) {
//     }

//     red() {
//         this.$el.style.color = 'red'
//     }
//     orange() {
//         this.$el.style.color = 'orange'
//     }
//     yellow() {
//         this.$el.style.color = 'yellow'
//     }
//     blue() {
//         this.$el.style.color = 'blue'
//     }
//     purple() {
//         this.$el.style.color = 'purple'
//     }
// }

// class Size {
//     constructor(size) {

//     }
// }




