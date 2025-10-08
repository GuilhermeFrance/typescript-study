// omit (mutio semelhante ao Pick, mas tem efeito contrário, ele omite justamente as propriedades passadas no generic)


interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type BasicUserInfo = Omit<User, "id" | "name"> 

const user: BasicUserInfo = {
  // id: 17, => aponta erro pois a propriedade está omitida 
  // name: "Guilherme", => aponta erro pois a propriedade está omitida 
  email: "g@g.com",
  isAdmin: true,
}