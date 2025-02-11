interface Person {
    firstname: string;
    lastname: string;
    age: number;
    height: number;
    weight: number;
}

type NamedPerson = Pick<Person , "firstname" | "lastname">;
let asaad: NamedPerson = {firstname: "asaad", lastname: "Saad"};

type SomePerson = Partial<Person>;
const mike: SomePerson = {firstname: "Asad", height: 180};

type JustName = Omit<Person, "age" | "height" | "weight">;
const theo: JustName = {firstname: "Theo", lastname: "Saad"};