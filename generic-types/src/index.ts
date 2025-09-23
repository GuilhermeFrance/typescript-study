// Generics

function getFirstElement <T>(arr: T[]) {
    return arr[0]
}

const names = ['Guilherme', 'Isabele', 'Hellen']

const myname = getFirstElement(names)

const numbers = [ 1, 2, 3, 4, 5]

const mynumber = getFirstElement(numbers)

const booleans = [false, true, false, true, false]

const myboolean = getFirstElement(booleans)