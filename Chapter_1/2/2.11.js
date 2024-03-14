'use strict'

// Что выведет alert?
alert(null || 2 || undefined)               // 2
alert(alert(1) || 2 || alert(3))            // 1 затем 2
alert(1 && null && 2)                       // null
alert(alert(1) && alert(2))                 // 1 затем undefined, т.к. alert(2) вернет undefined
alert(null || 2 && 3 || 4)                  // 3

{
    let value = NaN

    value &&= 10                            // только если value истина
    value ||= 20
    value &&= 30
    value ||= 40

    alert(value)                            // 30
}

{
    // Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
    if (age > 14 && age <= 90) {
        alert(age)
    }
}

{
    // Напишите условие if для проверки, 
    // что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
    if (age < 14 && age >= 90) {
        alert(age)
    }
}

{
    // Какие конкретно значения будут результатами выражений
    if (-1 || 0) alert('first')             // first
    if (-1 && 0) alert('second')            // не выполниться
    if (null || -1 && 1) alert('third')     // third, потому что -1&&1 вернет 1, т.к. -1 истина
}
{
    // Напишите код, который будет спрашивать логин с помощью prompt
    function pass() {
        const userName = prompt('введите логин')

        if (userName === 'Админ') {
            const password = prompt('Введите пароль')

            if (cancel(password)) return
            (password === 'Я главный') ? alert('Здравствуйте!') : alert('Неверный пароль')
        }
        else {
            cancel(userName)
        }
    }

    function cancel(value) {
        if (value === null || value === '') {
            alert('Отменено')
            return 1
        }
        return 0
    }
}
