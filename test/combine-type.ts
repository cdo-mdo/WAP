type Person2 {
    name: string;
    age: number;
}

type Tech2 {
    phone: string;
    laptop: string;
}

type TechPerson = Person2 & Tech2;

let asaad1: TechPerson = {name: "Asaad", age: 42, phone: "Samsung", laptop: "IBM"};