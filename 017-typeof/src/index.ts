// typeof 

const person = {
    name: "Guilherme",
    age: 22
}

type Person = typeof person

function createNewPerson(newPerson: Person){
}

createNewPerson({
    name: "Guilherme",
    age:22
})