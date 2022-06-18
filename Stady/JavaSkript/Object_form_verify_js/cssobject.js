// Задача: при введении параметров на экране возникает фигура:
// Параметры: видимость, размер, цыет, количество вершин(форма)
// При необходимости, какой-то из параметров можно изменить

// Выбираем элемент один из блоков 
// по значению "селектор"
// В нашем примере селектор: id="figure"
class Visibility {
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

class Color {
    constructor(color) {
    }

    red() {
        this.$el.style.color = 'red'
    }
    orange() {
        this.$el.style.color = 'orange'
    }
    yellow() {
        this.$el.style.color = 'yellow'
    }
    blue() {
        this.$el.style.color = 'blue'
    }
    purple() {
        this.$el.style.color = 'purple'
    }
}

class Size {
    constructor(size) {

    }
}

class Form {
    constructor(pickNumber) {
        switch (выражение) {
            case A:
               bla-bla...
            break
            case B:
               bla-bla...
            break
            default:
        }
    }
}


