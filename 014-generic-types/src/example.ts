// Generics 'API Response'

interface ApiResponse<T> {
    data: T,
    success: boolean,
    error?: string
}

interface User {
    id: string,
    name: string
}

interface Book {
    id: string,
    title: string
}

function fetchUser(): ApiResponse<User> {
    return {
        success: true,
        data: { id: "123", name: "Guilherme"},
    

    }
}

function fetchBook(): ApiResponse<Book> {
    return {
        success: true,
        data: { id: "456", title: "Nada pode me parar"}
    }
}