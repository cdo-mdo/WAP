const asaad = {name: 'Asaad', height: 180};
const theo = {name1: 'Theo'};

console.log(asaad);

const combine = Object.assign(asaad, theo);

console.log(asaad);
console.log(theo);
console.log(combine);
console.log(asaad === combine);
