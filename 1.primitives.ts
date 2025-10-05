// Примитивы 

// Статическая типизация - типы проверяются на этапе компиляции, а не выполнения


// Явная типизация
const variable: number = 5

// Выводимая типизация
const variable2 = 8
// Подхватывает методы для number
variable2.toFixed()


// Структурная типизация
// Если структура у типов одинакавая - TS это все хавает
export type TUser = {
    name: string, 
    lasname: string
}

export type TPerson = {
    name: string, 
    lasname: string
}

export type TPersonModified = {
    lasname: string, 
    adress: string
}

const getName = (obj: TUser) => obj.lasname

const person1: TPerson = {
    name: 'Ivan',
    lasname: 'Demidov'
}

const personModified: TPersonModified = {
    lasname: 'Demidov',
    adress: 'Spb'
}
// TS хавает
getName(person1)

// TS не хавает ts-ignore-next-line
getName(personModified)


// JS примитивы (7)
const string: string = ''
const number: number = 9007199254740991
const bigInt: bigint = 9007199254740992n
const bool: boolean = true
const undfnd: undefined = undefined
const nll: null = null
const sbl: symbol = Symbol('TS')

const sbl1: symbol = Symbol('TS')
// sbl === sbl1 //false

// TS special types
const random: any = ''
const random2: unknown = ''
// never
// void
// литералы