// Overload - Triangles


interface Triangle {
    sideA: number;
    sideB: number;
    sideC: number
}

interface Equilateral extends Triangle {
    type: "equilateral"
}
interface Isoceles extends Triangle {
    type: "isoceles"
}
interface Escaleno extends Triangle {
    type: "escaleno"
}

type Triangles = Equilateral | Isoceles | Escaleno;

function triangle(sides: number):Equilateral;
function triangle(sideA:number, sideBC: number):Isoceles;
function triangle(sideA: number, sideB: number, sideC: number):Escaleno;
function triangle(A: number, B?:number, C?:number)
{
    if(B && C){
        return {
            type: "escaleno",
            sides: A, sideB: B, sideC: C
        }
    }
    if(B && !C){
        return {
            type:"isoceles",
            sides: A, sideB: B, sideC: B
        }
    }
    return {
        type: "equilateral",
        sides: A, sideB: A, sideC: A 
    }
}