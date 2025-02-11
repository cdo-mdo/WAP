class Person {
    name = 'Asaad';
    greet() {console.log(`hi ` + this.name);}
}

const asaad1 = new Person();
asaad1.greet();
console.log(asaad1);
console.log(Person.prototype.greet.toString());

class Person1 {
    name: string = '';

    constructor(name) {
        this.name = name;
    }
}

const asaad2 = new Person1('Asaad1');