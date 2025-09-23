// keyof 

function getProperty<T, K extends keyof T>(obj: T, key: K){   
}

const person = {
    name: "Guilherme",
    age: 24
}

const player = {
    nickname: "proverbs",
    health: 100,
}

const book = {
    title: "Nada pode me parar",
    author: "David Goggins"
}

getProperty(person, "name")
getProperty(player, "nickname")
getProperty(book, "title")