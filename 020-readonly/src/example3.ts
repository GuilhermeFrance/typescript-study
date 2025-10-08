//Readonly

interface Player{
  name: string;
  health: number;
  shield: number;
  invertory: string[]
}

const player: Player = {
  name: "france_v",
  health: 100,
  shield: 50,
  invertory: ["sword", "potion", "armor"]
}

function freeze<T extends object>(obj: T): Readonly<T>{
  return Object.freeze(obj)
}

const StaticPlayer = freeze(player)

//Readonly sempre recebe um génerico!

