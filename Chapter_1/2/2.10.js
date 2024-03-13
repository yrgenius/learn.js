'use strict'

{
    // Выведется ли alert? (да)
    if ("0") {
        alert('Привет')
    }
}
{
    // Напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
    function quiz() {
        const answer = prompt("Какое «официальное» название JavaScript?")
        if (answer === 'ECMAScript') {
            alert('Верно!')
        }
        else {
            alert('Не знаете? ECMAScript!')
        }
    }
}
{
    // Напишите код, который получает число через prompt, а затем выводит в alert
    function comparisonWithZero() {
        const answer = +prompt("Введите число")
        if (answer > 0) {
            alert(1)
        }
        else if (answer === 0) {
            alert(0)
        }
        else {
            alert(-1)
        }
    }
}
{
    // Перепишите конструкцию if с использованием условного оператора '?'
    let result = (a + b < 4) ? 'Мало' : 'Много'
}
{
    // Перепишите if..else с использованием нескольких операторов '?'
    let message = (login == 'Сотрудник') ? 'Привет' :
        (login == 'Директор') ? 'Здравствуйте' :
            (login == '') ? 'Нет логина' : ''
}
