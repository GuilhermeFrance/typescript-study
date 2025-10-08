// Generics - extending a generic type

function logLength<T extends { length: number }> (item: T){
    return console.log(item.length)
}

const numbers = [1,2,3]
const myobj = { length: 20}
const myname = "Guilherme"

logLength(numbers);
logLength(myobj);
logLength(myname);

// Using interfaces

interface HasName {
    name: string
}

function greet<T extends HasName>(obj: T){
    console.log(`Olá, ${obj.name}`)
}

const player = {
    nick: "Fuze78"
}

const person = {
    name: "Edgar"
}

//acuses error:
greet(player)

//all ok! person have propriety called name
greet(person)