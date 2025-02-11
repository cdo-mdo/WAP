const person = {
    name: 'Asaad',
    printNow() { console.log(`Hi ${this.name}!`); }

};

const print = person.printNow.bind(person);;
print();
