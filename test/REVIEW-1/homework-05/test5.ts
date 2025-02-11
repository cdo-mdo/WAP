const Person = {
    name: 'Asaad',
    printAfterOneSecond() {
        console.log(`1. ${this.name}`);
        setTimeout(() => console.log(`2. ${this.name}`), 1000);
    },
};

Person.printAfterOneSecond();

