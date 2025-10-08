// union types - image size

type ImageSize = 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048

interface Image{
    name: string;
    size: ImageSize;
}

const image: Image = {
    name: "logo.png",
    size: 8, // ctrl + espaço para ver as opções do imagesize 

}

// union types - request status

type Status = "Not Found" | 404 | "Ok" | 200 | "forbiden" | 404;

function sendStatus(status: Status){

}

sendStatus(404)
