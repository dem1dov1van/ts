export type TSuperType = {
    name: string,
    lastName: string,
}

export type TSubType = {
    name: string,
    lastName: string,
    nickNmae: string
}

const subType: TSubType = {
    name: 'Ivan',
    lastName: 'Demidov',
    nickNmae: 'dem1dov1van'
} 

// Супертипу можно присвоить подтип и TS все это хавает
const superType: TSuperType = subType
// Что интересно, несмотря на то, что в superType есть nickName - TS думает о нем как о TSuperType
superType.lastName
superType.name
superType.nickName

const superType2: TSuperType = {
    name: 'Ivan',
    lastName: 'Demidov',
}
// функция ожидает суперТип, но также не ругается при передаче подтипа
const getName = (obj: TSuperType) => obj.name
getName(superType)
getName(subType)

// Обратное присвоение не работает
const subType2: TSubType = superType2

// подтип должен включать все поля и методы надтипа + может добавлять свои
// надтип содержит меньше свойств, чем подтип
// подтип может быть присвоен надтипу