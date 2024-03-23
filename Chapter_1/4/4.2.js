'use strict'

{
    // Копирование объектов и ссылки
    let object_1 = {
        name: 'Ann'
    }
    let object_2 = object_1

    object_2.name = 'Eva'                           // меняем    object_2
    console.log(object_1)                           // изменился object_1 (точнее оба)  { name: 'Eva' }
}

{
    // Клонирование и объединение (поверхностное)
    let object_1 = {
        name: 'Ann',
        age: 22,
    }
    let clone = {}

    for (let key in object_1) {
        clone[key] = object_1[key]
    }

    console.log(object_1)                           // { name: 'Ann', age: 22 }
    console.log(clone)                              // { name: 'Ann', age: 22 }

    clone.name = 'Eva'

    console.log(object_1)                           // { name: 'Ann', age: 22 }
    console.log(clone)                              // { name: 'Eva', age: 22 }
}

{
    // Object.assign
    let object_1 = {
        name: 'Ann',
        age: 22,
    }
    let object_2 = {
        name: 'Eva',
        age: 33,
    }
    let clone = {}

    Object.assign(clone, object_1, object_2)

    console.log(clone)                              // { name: 'Eva', age: 33 } (имена свойств одинаковы, 2-й перезапишет 1-й)

    //-----------------------------------------

    let object_3 = {
        name: 'Ann',
        age: 22,
    }
    let object_4 = {
        iq: 200,
        perm: 'admin',
    }
    let clone_2 = {}

    Object.assign(clone_2, object_3, object_4)
    console.log(clone_2)                            // { name: 'Ann', age: 22, iq: 200, perm: 'admin' }

    const clone_3 = { ...clone_2 }                  // ЕЩЕ ОДИН СПОСОБ КОПИРОВАНИЯ ОБЪЕКТА (ПОВЕРХНОСТНОЕ)
    clone_3.iq = 400
    console.log(clone_2)                            // { name: 'Ann', age: 22, iq: 200, perm: 'admin' }
    console.log(clone_3)                            // { name: 'Ann', age: 22, iq: 400, perm: 'admin' }
}

{

}