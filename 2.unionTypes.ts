// Объединение union
let data: string | number
data = 5
data = '5'


export type TMainInfo = {
    name: string,
    lastName: string
}

export type TAdditionalInfo = {
    age: number
}


export type TFullInfo = TMainInfo | TAdditionalInfo
const info: TFullInfo = {
    name: '',
    lastName: '',
    age: 11
}

const info1: TFullInfo = {
    name: '',
    lastName: ''
}

const info2: TFullInfo = {
    age: 11
}


// Пересечение intersection

export type TType = string & number

export type TMainInfo1 = {
    name: string,
    lastName: string
}

export type TAdditionalInfo1 = {
    age: number
}

export type TFullInfo1 = TMainInfo & TAdditionalInfo
const info3: TFullInfo1 = {
    name: '',
    lastName: '',
    age: 11
}
// ошибка
const info4: TFullInfo1 = {
    name: '',
    lastName: ''
}
// ошибка
const info5: TFullInfo1 = {
    age: 11
}