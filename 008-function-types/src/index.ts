// function types

type Args = string | number | boolean;
function bootstrap(dirname: string, args?: Args[]): boolean{
    return true;
}

type MainFunction = (args: string[]) => void;

const main: MainFunction = (args) => {

}

interface Functions {
    run(context: any): void;
    execute(): boolean;
    handle(req:Request, res: Response):void;
}

const funcs: Functions = {
    execute() {
        return true;
    },
    run(){

    },
    handle(req, res) {
        
    }
}
