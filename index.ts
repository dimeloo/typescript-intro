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

let finalNumber: number = findIndex(1, NumberOfStudents)
console.log(finalNumber + 1)


// console.log("You're how old: ", age)