// Type Intersections 

interface myFetchOptions {
    printInput?: boolean;
    printTime?: boolean;
}

type RequestOptions = myFetchOptions & RequestInit

export function myFetch(input: string, options?: RequestOptions) {
   if(options?.printInput){
    console.log("Input", input)
   }
   if(options?.printTime){
    console.log("Time", new Date().toDateString)
   } 
}

myFetch("https://localhost:9000/auth", {
    method: "PUT"
})