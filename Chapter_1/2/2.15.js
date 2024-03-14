'use strict'

{
    // Перепишите функцию, используя оператор '?' или '||'
    function checkAge(age) {
        return (age > 18) ? true : confirm('Родители разрешили?')
        // return (age > 18) || confirm('Родители разрешили?')
    }
}
{
    // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
    function min(a, b) {
        return (a > b) ? b : a
    }
}
{
    // Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат
    // Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n)
    const x = prompt('Введите х', 0)
    const n = prompt('Введите n', 1)

    alert(pow(x, n))

    function pow(x, n) {
        if (+n > 0 && n !== null) return Number(x) ** +n
        else return (`Степень ${n} не поддерживается, используйте натуральное число`)
    }
}