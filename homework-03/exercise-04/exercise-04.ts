function sum(...numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum());
console.log(sum(5, 10, 15));