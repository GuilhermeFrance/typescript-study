//Generics

class MyCustomArray<T> {
    private items: T[] = [];

    public add(item: T){
        this.items.unshift(item)
    }
    public remove(item: T){
        this.items.shift
    }
    public isEmpty(): boolean{
        return this.items.length === 0
    }

}