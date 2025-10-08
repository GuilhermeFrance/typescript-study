// as const 

const Action = {
  create: 1,
  update: 2,
  delete: 3
} as const 

type ActionEnum = typeof Action;
type Actions = keyof ActionEnum;

function manage(action: Actions | ActionEnum[Actions]){
if(typeof action === "string"){
 return action;
}
return action

}

