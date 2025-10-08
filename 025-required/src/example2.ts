// partial, basicamente funções parciais, onde o Partial torna todas as propriedades de uma interface ou classe, opicionais.


interface Player {
  name: string;
  shield: string;
  health: boolean;
  inventory: string[];
}
// Todas as propriedades opcionais menos o name => 
type CustomPlayer = Partial<Omit<Player, "name">> & Pick<Player, "name">

const NewCustomPlayer: CustomPlayer = {
name: "Guilherme",
inventory: ["gun", "grenade", "helmet"]
}
