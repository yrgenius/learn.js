'use strict'

{
    // Методы объекта
    const user = {
        name: 'Ben',
        age: 25,
        sayHi: function () {
            console.log('hi')
        },
        sayBay() {
            console.log('good bay')
        },
        showName() {
            console.log(this.name)
        },
        showThis() {
            console.log(this)                                           // ссылка на объект
        },
        showThisArrow() {
            let arrow = () => console.log(this)                         // ссылка на объект
            arrow()
        },
        showThisInnerFunction() {
            function arrow() { console.log(this) }                      // undefined
            arrow()
        }
    }
    user.showAge = function () {
        console.log(this.age)
    }
    user.showUserInfo = () => console.log(`${this.name}: ${this.age}`)          // undefined: undefined

    let outerArrowFunction = () => console.log(`${this.name}: ${this.age}`)     // undefined: undefined
    user.outerArrowFunction = outerArrowFunction

    user.sayHi()
    user.sayBay()
    user.showName()
    user.showAge()
    user.showThis()
    user.showUserInfo()
    user.showThisArrow()
    user.showThisInnerFunction()
    user.outerArrowFunction()
}

{
    // Создайте объект calculator (калькулятор) с тремя методами
    const calculator = {
        a: 0,
        b: 0,
        read() {
            this.a = +prompt('Введите первое число') || 0
            this.b = +prompt('Введите первое число') || 0
        },
        sum() { return this.a + this.b },
        mul() { return this.a * this.b }

    }

    calculator.read()
    alert(calculator.sum())
    alert(calculator.mul())
}

{
    // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так
    // ladder.up().up().down().showStep().down().showStep()
    let ladder = {
        step: 0,
        up() {
            this.step++
            return this
        },
        down() {
            this.step--
            return this
        },
        showStep() { // показывает текущую ступеньку
            alert(this.step)
            return this
        }
    }
    console.log(ladder.up().up().down().showStep().down().showStep())
}