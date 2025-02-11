function deepFreeze(obj) {
    
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) {
            // Recursively freeze nested objects.
            deepFreeze(obj[prop]);
        }
    });

    // Freeze the current object
    return Object.freeze(obj);
}

const array = [1, 2, 3, 4, 5];
console.log(array);
array.push(6);
console.log(array);
Object.freeze(array);
try {
    array.push(7);
}
catch (error) {
    console.error(error.message);
}

const arr1 = Object.freeze(['a', 'b', 'c']);
console.log(arr1);
const arr2 = arr1.concat('d');
console.log(arr2);
const arr3 = [...arr1, 'e'];
console.log(arr3);

const arr4 = Object.freeze(['a', 'b', 'c', 'd', 'e']);
console.log(arr4);
const arr5 = arr4.filter(item => item === 'c');
console.log(arr5);
const arr6 = arr4.map(item => item === 'c' ? 'Asaad' : item);
console.log(arr6);


const obj1 = Object.freeze({first: 'Asaad'});
const obj2 = Object.assign({}, obj1, {last: 'saad'});
const obj3 = { ...obj1, last: 'saad'};
console.log(obj1);
console.log(obj2);
console.log(obj3);

const obj10 = Object.freeze({first: "Asaad", last: 'Saad'});
console.log(obj10);
const obj20 = Object.assign({}, obj10, {first: 'Theo'});
console.log(obj20);
const obj30 = {...obj10, first: 'Theo1'};
console.log(obj30);