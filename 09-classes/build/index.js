// Classes 
export class Player {
    static players = [];
    name;
    health;
    constructor(name) {
        this.name = name;
        this.health = 20;
    }
    getHealth() {
        return this.health;
    }
    getName() {
        return this.name;
    }
    damage(amount, damager) {
        const updatedHealth = this.health - amount;
        console.log(damager
            ? `${damager.getName()} deu ${amount} de dano em ${this.name}`
            : `${this.name} tomou ${amount} de dano`);
        if (updatedHealth <= 0) {
            this.health = 0;
            player.die();
        }
    }
    die(damager) {
        if (damager) {
            console.log(this.name, " foi morto(a) por ", damager.getName());
        }
        console.log(this.name, "morreu");
    }
}
const player = new Player("Guilherme");
const player2 = new Player("João");
player.damage(30, player2);
Player.players.push(player, player2);
