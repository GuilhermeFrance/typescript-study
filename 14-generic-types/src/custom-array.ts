// Generics

class MyCustomArray<T> {

    private items: T[] = []

    public add(item: T){
        this.items.unshift(item)
    }
    public remove(): T | undefined {
        return this.items.shift()
    }
    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}

//Custom array

const arr = new MyCustomArray<string | number| boolean | undefined >
    
arr.add("Rincko")   
arr.add(12)
arr.add(true)
arr.add(undefined)


// Custom string array

const myCustomStringArr = new MyCustomArray<string> ();
myCustomStringArr.add("Guilherme")
const removed = myCustomStringArr.remove();

// Custom number array 

const myCustomNumberArr = new MyCustomArray<number> ();
myCustomNumberArr.add(77)
const removedNumber = myCustomNumberArr.remove()

