interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

function describePerson(person: Person) {
    return `${person.name} is ${person.age} years old and ${person.isStudent? 'is a student': 'is not a student'}`;
}

const person1: Person = {
    name: 'Alice',
    age: 25,
    isStudent: true
}

const person2: Person = {
    name: 'Tom',
    age: 35,
    isStudent: false
}


console.log(describePerson(person1));
console.log(describePerson(person2));