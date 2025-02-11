interface Person1 {
    name: string;
    age: number;
}

interface Tech {
    laptop: string;
    phone: string;
}

const saad: Person1 & Tech = {name: "Asaad", age: 42, laptop: "IBM", phone: "samsung"};