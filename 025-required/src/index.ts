// Required - transforma toda as proprierdades opcionais em obrigatórias

type MyFetchOptions = 
Required<Pick<RequestInit, "body" | "method">> &
Omit<RequestInit, "body" | "method">

function myFetch(url: string, options?: MyFetchOptions){

}

myFetch("http://localhost:8080/auth", {
  // agora somente body e method sao obrigatorios
})

