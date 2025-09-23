// herança de classes
export class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(this.name, "está fazendo um som!");
    }
}
class Dogs extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    makeSound() {
        console.log(this.name, "está latindo!");
    }
}
const dog = new Dogs("Zeus", 6, "Pitbull");
// herança protected
class Person {
    age;
    constructor(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
class Employee extends Person {
    name;
    constructor(name, age) {
        super(age);
        this.name = name;
    }
    introduce() {
        console.log(`Eu sou ${this.name} e tenho ${this.getAge()} anos de idade.`);
    }
}
const emp = new Employee("GUilherme", 22);
