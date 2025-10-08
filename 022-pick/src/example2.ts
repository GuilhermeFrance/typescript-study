
interface Player {
  health: number;
  name: string;
  shield: number;
  inventory: string[];
}

const player: Player = {
  name: "Guilherme",
  health: 100,
  shield: 50,
  inventory: ["potion", "armor"]
}

function execute<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>{
  return Object.create({})
}

const newPlayer = execute(player, ["health", "name"])

newPlayer.name = "The Mage";
newPlayer.health = 20