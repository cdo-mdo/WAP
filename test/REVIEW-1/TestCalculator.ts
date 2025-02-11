import addddd, {substract, multiply, divide} from './Calculator';

console.log(addddd(1, 2));
console.log(substract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
try {
    console.log(divide(1, 0));
} catch (error) {
    console.log(error.message);
}
