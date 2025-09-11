// type anotations

import { create } from "domain";

const myName: string = "Guilherme";
const myInt: number = 7;
const myBoolean: boolean = true;
const myVar: any = "Yeshua";
const myAny: null = null;
const myUnd: undefined = undefined;

// soma

var soma: number = 0;
function sum(a: number, b:number): number {
    return a + b;
}

soma = sum(3, 5);
console.log(soma)

//interfaces 

interface UserWallet {
    coins?: number;
    credits?: number;
}

interface User {
    name: string;
    createdAt: Date;
    wallet?:UserWallet
    }

function createUser(name: string): User{
    return{name, createdAt: new Date()} 
}

function updateWallet(user: User, wallet: UserWallet){
    user.wallet = { ...user.wallet, ...wallet }

}

const Guilherme = createUser("Guilherme");

updateWallet(Guilherme, { coins : 10})