//type - interface

type userWallet = {
    coins: number;
    credits: number;
}

type User = {
    name: string;
    createdAt: Date;
    wallet?: userWallet
}

type Admin = User & {
    ban(user: User): void;
    kick(user: User): void;
}

