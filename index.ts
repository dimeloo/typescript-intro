let age: number = 35
let firstName: string = 'Mike'
let isTeaching: boolean = false

const classes: string[] = ['javascript', 'typescript']
let NumberOfStudents: number[] = [23,14]
NumberOfStudents.push(age)
// console.log(NumberOfStudents)

enum TaxForms {
    incomeTax='Tax form 1099',
    childCare=244,
    bitcoinLoss=420,
    richDude=378,
}

const WhichTaxForm = TaxForms.richDude
// console.log('Use tax form:', WhichTaxForm)

let postalCode: number | string = 'L3p-6R8'
// postalCode = 11111
// console.log(postalCode)

function findIndex(index: number, arr: number[]): number {
    return arr[index]
}

function log(msg: any): void {
    //inserts into the database
    console.log(msg)
}

let finalNumber: number = findIndex(1, NumberOfStudents)
// log(finalNumber + 1)
// log("yep. it's not going to return something")


const complexObject: any = {name: 'mike', height: 'yes please'}
interface Human {
    name: string
    height: string
}

interface Teacher extends Human {
    age: number
    weight?: string
}

const complexObject2: Teacher = {name: 'mike', height: 'yes please', age: 35}

function displayTeacher(teacher: Teacher): string {
    return `this teacher is ${teacher.age} old`
}

console.log(displayTeacher(complexObject2))