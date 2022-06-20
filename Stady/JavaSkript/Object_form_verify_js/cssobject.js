// Задача: при введении параметров на экране возникает фигура:
// Параметры: видимость, размер, цыет, количество вершин(форма)
// При необходимости, какой-то из параметров можно изменить

// Выбираем элемент один из блоков 
// по значению "селектор"
// В нашем примере селектор: id="figure"
alert('Скрипт начал работу')
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
        this.$el.style.height = this.$el.style.width = options.size + 'px'
        this.$el.style.background = options.color
        switch (options.pickNumber * 1) {
// Circle            
            case 0:
                this.$el.style.borderRadius = '50%'             
            break
// Point
            case 1:
                this.$el.style.height = this.$el.style.width = '6px'
                this.$el.style.borderRadius = '50%'    
            break
// Otrezok
            case 2:
                this.$el.style.height = '6px'
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

const figure  = new Form ({
    selector: '#fig',
    size: 150,
    pickNumber: number,
    color: 'blue'
})
