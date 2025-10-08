// readonly

interface User {
  readonly id: string;
  name: string;
  age: number;
}

const user: User = {
  id: "2025039",
  name: "Guilherme France",
  age: 22,
};

user.name = "Guilherme F.";
user.age = 23;


// user.id = "2025040". Apontaria erro pois na minha interface eu digo que é uma propriedade de somente leitura, porém não é tão efetivo


//Forma Efetiva

Object.defineProperties(user, {
  id: {
    writable: false,
  },
});