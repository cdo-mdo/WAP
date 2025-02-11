const person = {
    name: "Asaad",
    printAfterOneSecond() {
    console.log(`1. ${this.name}!`);
    setTimeout((function() { console.log(`2. ${this.name}!`); }.bind(person)), 1000);
    },
};
person.printAfterOneSecond();

 