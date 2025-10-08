// Record 

interface Route {
    path: string,
    children?: Routes
}

type Routes = Record<string, Route> 

const routes: Routes = {
    home: {
        path: "/",
        children: {
            
        }
    }
}