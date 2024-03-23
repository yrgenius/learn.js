'use strict'

{
    // Создание объектов
    let a = new Object()
    let b = {}
    let c = {
        a: a,
        b: b,
        c: 25,
        d: 'abc'
    }
    console.log(a)
    console.log(b)
    console.log(c)                          // { a: {}, b: {}, c: 25, d: 'abc' }
    console.log(c.d)                        // abc

    delete c.a
    console.log(c)

    c.isBoolean = false
    console.log(c)
    console.log(c['isBoolean'])

    c['some words key'] = 'many words'
    console.log(c)

    let key = (333 > 10) ? '333' : '10'
    const e = {
        [key]: '___num___'
    }
    console.log(e)                          // { '333': '___num___' } 

}

{
    // Проверка существования свойства, оператор «in»
    let a = {}
    console.log(a.key === undefined)        // true - означает "свойства нет"
    console.log('key' in a)                 // false
}

{
    // Перебор свойств
    let a = {
        a: '22',
        c: '33',
        d: 77,
        e: false,
    }

    for (let key in a) {
        console.log(key)                    // a c d e 
    }

    for (let key in a) {
        console.log(a.key)                  // undefined undefined undefined undefined
    }

    for (let key in a) {
        console.log(a[key])                 // 22 33 77 false
    }

}

{
    // Напишите код, выполнив задание из каждого пункта отдельной строкой

    // Создайте пустой объект user
    const user = {}
    // Добавьте свойство name со значением John
    user.name = 'John'
    // Добавьте свойство surname со значением Smith
    user['surname'] = 'Smith'
    // Измените значение свойства name на Pete
    user.name = 'Pete'
    // Удалите свойство name из объекта
    delete user.name

    console.log(user)                       // { surname: 'Smith' }
    console.log(user)
}

{
    // Напишите функцию isEmpty(obj), которая возвращает true, 
    // если у объекта нет свойств, иначе false.
    let noKey = {}
    let yesKey = { '8:30': 'get up' }

    const isEmpty = (obj) => {
        for (let key in obj) {
            if (key) return false
        }
        return true
    }

    console.log(isEmpty(noKey))             // true
    console.log(isEmpty(yesKey))            // false
}

{
    // Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
    // да
}

{
    // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    const summarySalaries = (salaries) => {
        let sum = 0
        for (let value in salaries) {
            sum += salaries[value]
        }
        return sum
    }

    console.log(summarySalaries(salaries))      // 390
}

{
    // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    }

    const multiplyNumeric = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'number') obj[key] *= 2
        }
    }

    multiplyNumeric(menu)
    console.log(menu)                           // { width: 400, height: 600, title: 'My menu' }
}