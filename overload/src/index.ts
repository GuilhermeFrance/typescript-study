// Overload

/**
 * Criar uma nova data a partir de outra
 *  */ 
function createDate(value: Date): Date;
/**
 * Criar uma nova data a partir de um número
 *  */ 
function createDate(value: number): Date;
/**
 * Criar uma nova data a partir da escrita
 *  */ 
function createDate(value: string): Date;
function createDate(value: Date | number | string): Date{
    return new Date(value)
}

// --------------------------------------------------------------------------


interface Person{
    name: string,
    age: number
}

interface House{
    adress: string,
    size: number
}

interface Dog{
    name: string,
    breed: string
}


function generate(type: "person"): Person;
function generate(type: "house"): House;
function generate(type: "dog"): Dog;
function generate(type: "person" | "house" | "dog"){
    switch(type){
        case "person": return {
            name: "Guilherme", age: 22
        }
        case "house": return {
            adress: "Via Local O, 13", size: 30
        }
        case "dog": return{
            name: "Zeus", breed: "Pitbull"
        }
    }
}

const house = generate("house")

house.adress 