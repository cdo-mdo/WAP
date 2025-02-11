interface Person {
    name: string,
    are: number,
    isstudent: boolean,
}

function describePerson(person: person): string {
    return `${person.name} is ${person.age} years old and ${person.isstudent === true ? 'is a student' : 'is not a student'}`;
}

const p1 = {
    name: 'Alice',
    age: 20,
    isstudent: true
}

const p2 = {name: 'John', age: 21, isstudent: false};
console.log(describePerson(p1));
console.log(describePerson(p2));
