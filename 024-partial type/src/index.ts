// partial, basicamente funções parciais, onde o Partial torna todas as propriedades de uma interface ou classe, opicionais.


interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type PartialUser = Partial<User> 

const user: PartialUser = {
  name: "Guilherme"
}