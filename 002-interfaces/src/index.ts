
//interfaces 

declare global{
    interface Console{
        sayHello() : void;
    }
}

Object.assign( console, {
    sayHello(){
        console.log("Hello")
    }}
)

console.sayHello();


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


interface Admin extends User{
    ban(user: User): void;
    kick(user: User): void;
}    

function promoteUser(user: User): Admin{
    return {
        ...user,
        ban(userToBan){
            console.log(userToBan, "foi banido por", this.name)
        },
        kick(userToKick){
            console.log(userToKick, "foi kickado por", this.name)
        }}}



const adminGuilherme = promoteUser(Guilherme);

function adminAction(admin: Admin){

}

adminAction(adminGuilherme)

updateWallet(Guilherme, { coins : 10}) 