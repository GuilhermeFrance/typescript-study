//type alias

interface Dog{
    name: string;
    breed: string;
    bark(): string;
}

interface Cat{
    name: string;
    color: string;
    meow(): string;
}

interface Bird{
    name: string;
    wingspan: string;
    chirp(): string;
}

interface Cow{
    name: string;
    weight: number;
    moo(): string;
}

type Animal = Dog | Cat | Bird | Cow;

function createAnimal(animal: Animal){

}

createAnimal({
    name: "Zeus",
    breed: "Hotweiller",
    bark() {
        return "woooff"
    },
})

//alternatives

/*type Animal = {
    name: string;
    breed: string;
    bark(): string;
} | {
    name: string;
    color: string;
    meow(): string;
}
 | {
    name: string;
    wingspan: string;
    chirp(): string;
} | {
    name: string;
    weight: number;
    moo(): string;
};

function createAnimal(animal: Animal){

}

createAnimal({
    name: "Zeus",
    breed: "Hotweiller",
    bark() {
        return "woooff"
    },
})*/