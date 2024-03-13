'use strict'
{
    // Number
    let a = 1
    let b = 2.3
    let c = NaN
    let d = Infinity
    let e = 1 / 0           // Infinity
    let f = -Infinity
    let g = -1 / 0          // -Infinity
    let h = NaN ** 0        // 1 (любая мат. операция с NaN даст NaN, кроме возведения в 0)

    console.log(e)
    console.log(g)
    console.log(h)
}
{
    // BigInt
    let a = 1n
    let b = 2n
    // let b = 3.5n         только ЦЕЛЫЕ ЧИСЛА
    console.log(a)          // 1n
    console.log(a + b)      // 3n
}
{
    // String
    let a = 'string "string"'
    let b = "string 'string'"
    let c = `${a} ${b}`

    console.log(a)
    console.log(b)
    console.log(c)
}
{
    // Boolean
    let a = true
    let b = false
    let c = 2 > 1
}
{
    // null, undefined
    let a = null
    let b = undefined
    let c                                   // undefined

    console.log(c)
}
{
    // typeof
    console.log(typeof 3)
    console.log(typeof (4))
    console.log(typeof (4 - 3))

    console.log(typeof 333 + "КОРОВЫ")      // numberКОРОВЫ
    console.log(typeof (333 + "КОРОВЫ"))    // string
    console.log(typeof 333 - "КОРОВЫ")      // NaN
    console.log(typeof (333 - "КОРОВЫ"))    // number

    console.log(typeof undefined)           // undefined
    console.log(typeof 2)                   // number
    console.log(typeof 2n)                  // bigint
    console.log(typeof true)                // boolean
    console.log(typeof 'string')            // string
    console.log(typeof Symbol('mySimbol'))  // symbol
    console.log(typeof Math)                // object
    console.log(typeof null)                // object
    console.log(typeof function a() { })    // function

}


// 1. Шаблонные строки
let name = "Ilya"

console.log(`hello ${1}`)                   // hello 1
console.log(`hello ${"name"}`)              // hello name
console.log(`hello ${name}`)                // hello Ilya
