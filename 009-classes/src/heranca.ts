// herança de classes

export class Animal{
        name: string;
        age: number;
    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
    makeSound(): void{
        console.log(this.name, "está fazendo um som!")
    }
}

class Dogs extends Animal{
    breed: string;
    constructor(name: string, age: number, breed: string){
        super(name, age);
        this.breed = breed;
    }
    makeSound(): void {
        console.log(this.name, "está latindo!")
    }
}

const dog = new Dogs("Zeus", 6, "Pitbull")


// herança protected

class Person{
    age: number;
    constructor(age: number){
        this.age = age;
    }
    protected getAge(): number{
        return this.age;
    }
}

class Employee extends Person{
    private name: string;
    constructor(name: string, age: number){
        super(age);
        this.name = name;
    }
    public introduce():void{
        console.log(`Eu sou ${this.name} e tenho ${this.getAge()} anos de idade.`)
    }
}

const emp = new Employee("GUilherme", 22)
emp.introduce()