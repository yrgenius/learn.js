'use strict'

{
    // Какое последнее значение выведет этот код? Почему? 
    let i = 3

    while (i) {
        alert(i--)                              // 1
    }
}
{
    // Для каждого цикла запишите, какие значения он выведет.
    let i = 0
    while (++i < 5) alert(i)                    // 1 2 3 4
}
{
    // Для каждого цикла запишите, какие значения он выведет.
    let i = 0
    while (i++ < 5) alert(i)                    // 1 2 3 4 5
}
{
    // Какие значения выведет цикл for?
    for (let i = 0; i < 5; i++) alert(i)        // 0 1 2 3 4
    for (let i = 0; i < 5; ++i) alert(i)     // 0 1 2 3 4
}
{
    // При помощи цикла for выведите чётные числа от 2 до 10
    for (let i = 0; i < 11; i++) {
        !(i % 2) && alert(i)
    }
}
{
    // Замените for на while
    let i = 0
    while (i < 3) {
        alert(`number ${i}!`)
        i++
    }
}
{
    // Напишите цикл, который предлагает prompt ввести число, большее 100. 
    // Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
    while (true) {
        const answer = prompt('Введите число больше 100')
        if (+answer > 100 || answer === null) break
    }
}
{
    // Напишите код, который выводит все простые числа из интервала от 2 до n
    function simpleNumbers(n) {
        for (let i = 2; i <= n; i++) {
            let count = 0
            for (let k = i; k > 1; k--) {
                if (i % k === 0) count++
                if (count > 1) break
            }
            if (count === 1) {
                alert(i)
            }
        }
    }
    simpleNumbers(11)
}