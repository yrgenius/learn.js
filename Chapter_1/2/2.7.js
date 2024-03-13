'use strict'

{
    // Строковое преобразование
    let a = true
    console.log(typeof String(a))           // string
}
{
    // Численное преобразование
    let a = '123'
    let b
    let c = null
    console.log(+a)                         // 123
    console.log(+true)                      // 1
    console.log(+false)                     // 0
    console.log(+'')                        // 0
    console.log(typeof +a)                  // number
    console.log(typeof Number(a))           // number
    console.log(typeof ('6' / '2'))         // number
    console.log('шесть' / '2')              // NaN
    console.log(Number(b))                  // NaN (undefined в NaN)
    console.log(Number(c))                  // 0   (null в 0)
    console.log(Number(true))               // 1
    console.log(Number(false))              // 0
    // console.log(5++)                     // ОШИБКA, можно применять только к переменной
}
{
    // Логическое преобразование
    console.log(Boolean(0))                 // false
    console.log(Boolean(null))              // false
    console.log(Boolean(undefined))         // false
    console.log(Boolean(NaN))               // false
    console.log(Boolean(''))                // false
    console.log(!'false')                   // false

    console.log(Boolean('0'))               // true
    console.log(!!'false')                  // true
}
