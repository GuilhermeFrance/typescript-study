// Classes 

export class Player{
    public static players: Player[] = []
    private name: string;
    private health: number;
    constructor(name: string){
        this.name = name;
        this.health = 20;
    }
    public getHealth(){
        return this.health;
    }
    public getName(){
        return this.name;
    }


    public damage(amount: number, damager?: Player){
        const updatedHealth = this.health - amount;
        console.log( damager
            ? `${damager.getName()} deu ${amount} de dano em ${this.name}`
            : `${this.name} tomou ${amount} de dano`
        )
        if(updatedHealth <= 0){
            this.health = 0;
            player.die()
        }
    }
    private die(damager?: Player){
        if(damager){
            console.log(this.name, " foi morto(a) por ", damager.getName())
        }
        console.log(this.name, "morreu")
    }
}   

const player = new Player("Guilherme");
const player2 = new Player("João")

player.damage(30, player2)

Player.players.push(player, player2)

