
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type BasicUserInfo = Pick<User, "id" | "name"> 

const user: BasicUserInfo = {
  id: 17,
  name: "Guilherme",
}