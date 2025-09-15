// Overload 

interface Component { id: number, label: string }

interface Button extends Component {
    style: string
}

interface SelectMenu extends Component {
    options: string[]
}

enum InputType {
    String,
    Number,
    Date,
    Email,
    Passowrd
}

interface Input extends Component{
    type: InputType
}

function buildComponent(id: number, label: string, style: string):Button
function buildComponent(id: number, label: string, options: string[]):SelectMenu
function buildComponent(id: number, label: string, type: InputType):Input
function buildComponent(id: number, label: string, arg: string)
{
if(typeof arg === "string"){
    return {id, label, style: arg}
}
if(Array.isArray(arg)){
    return { id, label, options: arg}
}
return { id, label, type: arg}
}