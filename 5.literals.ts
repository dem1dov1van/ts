export type TColors = 'red' | 'green'

const color: TColors = 'green'
const color2 = 'red'
const objColor = {
    color: 'green'
}

const objColor2 = {
    color: 'green'
} as const

const paint = (col: TColors) => {}

paint(color)
// Спасибо структурной типизации
paint(color2)
// TS воспринимает поля как string, а не как литерал
paint(objColor.color)
// Но если задать as const - то ошибка проподает
paint(objColor2.color)

// стало read-only полем
objColor2.color = 'red'


export type TObj = {
    // сделать поле read-only:
    readonly id: string
}


export type TEventName = 'Click' | 'Change'

export type THandlerName = `on${TEventName}`