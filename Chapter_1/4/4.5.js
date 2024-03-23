'use strict'

// Конструктор, оператор "new"

function User(name, age) {
    this.name = name
    this.age = age
    console.log(new.target)                             // [Function: User]

    this.sayHi = function () {
        console.log('hi')
    }
}

function Auto(color, marka) {
    this.color = color || 'blue'
    this.marka = marka || 'nissan'
}

function Cat(name, color) {
    this.name = name || 'Murka'
    this.color = color || 'white'
    return 22                                           // Cat { name: 'Murka', color: 'white' }
}


let ann = new User('Ann', 33)
let bmw = new Auto('grey', 'bmw')
let barsik = new Cat('Barsik', 'black')
let murka = new Cat()

console.log(ann, bmw, barsik, murka)
console.log(new Cat())

ann.sayHi()

{
    // Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами
    function Calculator() {
        this.a = 0
        this.b = 0
        this.read = function () {
            this.a = +prompt('Введите число')
            this.b = +prompt('Введите число')
        }
        this.sum = function () { return this.a + this.b }
        this.mul = function () { return this.a * this.b }
    }
    let calculator = new Calculator()
    calculator.read()

    alert("Sum=" + calculator.sum())
    alert("Mul=" + calculator.mul())
}

{
    // Создайте функцию-конструктор Accumulator(startingValue)
    function Accumulator(startingValue) {
        this.value = startingValue
        this.read = function () {
            this.value += +prompt('Введите число')
            this.showAcc()
        }
        this.showAcc = function () {
            alert(`Сумма чисел равна: ${this.value}`)
        }
    }

    let accumulator = new Accumulator(100)                  // начальное значение 1
    accumulator.read()                                      // прибавляет введённое пользователем значение к текущему значению
    accumulator.read()                                      // прибавляет введённое пользователем значение к текущему значению

    alert(accumulator.value)                                // выведет сумму этих значений
}

