import {
    add, 
    substract,
    multiply,
    divide
} from "./calculator";

function testCalculator(num1: number, num2: number): void {
    console.log(`Adding ${num1} and ${num2}: ${add(num1, num2)}`);
    console.log(`Substracting ${num1} and ${num2}: ${substract(num1, num2)}`);
    console.log(`Multipying ${num1} and ${num2}: ${multiply(num1, num2)}`);
    try {
        console.log(`Dividing ${num1} and ${num2}: ${divide(num1, num2)}`);
    }
    catch (error) {
        console.error(error.message);
    }
}

testCalculator(10, 5);
testCalculator(5, 0);
