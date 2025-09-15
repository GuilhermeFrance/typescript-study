// Narrowing 

interface Human{
    name: string,
    age: number,
     pets?:Animal[]
}
interface Animal{
    name:string,
    age: number,
    follow(): void
}
interface Post{
    title: string,
    author: string
}

function handle(value: Human | Animal | Post){
    if ("name" in value && "follow" in value){
        value;
        return;
    }
    if("title" in value){
        value;
        return;
    }
    value
}