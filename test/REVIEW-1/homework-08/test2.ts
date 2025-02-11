const asaad = { name: 'Asaad', height: 180 };

const obj1 = Object.assign({}, asaad);
const obj2 = { ...asaad };

console.log(obj1);
console.log(obj2);

console.log(obj1 == asaad);
console.log(obj2 == asaad);
