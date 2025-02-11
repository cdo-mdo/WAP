const person = {
    name: "Asaad",
    printNow() { console.log(`Hi ${this.name}!`); }
};

person.printNow();

const print = person.printNow;
// print();
const printWithBind = person.printNow.bind(person);
printWithBind();