// any
// unknown
// never
// void

// any
// any отключает любую проверку TS. Попросту убивает TS
let value: any
value = ''
value = 5
value = {}
value = []

// any можно использовать на этапе обучения
// Является подтипом и надтипом для всего

// ------------------------------------------

// unknown
// позволяет безопасно обработать неизвестный тип
const foo = (data: unknown) => {
    // вызывает ошибку
    // let string: string = data

    let string: string
    if(typeof data === 'string') {
        string = data
    }
}

// unknown - это супертип для всех типов, не не может быть подтипом

let value2: unknown
value = ''
value = 5
value = {}
value = []

let value3: unknown
let value4: string = value3

// ------------------------------------------

// never
// never - это пустое множество, недостижимое значение

const foo2 = (): never => {
    while(true) {

    }
}

// never - это подтип для всего, но не может быть супертипом

let value5: string = ''
let value6: never = value5

// Exhaustive Check

enum Names {
    Ivan,
    Vanya
    // Johan
}

const foo3 = (val: Names) => {
    switch(val) {
        case Names.Ivan:
            return val;
        case Names.Vanya:   
            return val;    
        default: 
            const exhaustiveCheck: never = val
            return exhaustiveCheck
    }
}

foo3(Names.Ivan)
foo3(Names.Vanya)

// ------------------------------------------

// void
// означает, что функция ничего не возвращает (даже если возвращает undefined)

const foo4 = () => {

}

foo4()

const foo5 = ():void => {

    // return null
    return undefined
}

foo5()