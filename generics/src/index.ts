// Generics 

interface ApiResponse<T>{
    data: T,
    success: boolean,
    error?: string
}

interface User {
    id: string,
    name: string,
    role: string
}

function fetchUser():ApiResponse<User>{
    return {
        success: true,
        data: { id: "123", name: "GUilherme", role: "Gerente"}
    }
}

interface Book{
    id: string,
    title: string
}

function fetchBook():ApiResponse<Book>{
        return {
            success: true,
            data: { id: "323", title: "O pequeno príncipe"}
        }
    }

const response = fetchBook()
