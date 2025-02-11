export default function add(num1: number, num2: number) {
    return num1 + num2;
}

export function substract(num1: number, num2: number) {
    return num1 - num2;
}

export function multiply(num1: number, num2: number) {
    return num1 * num2;
}

export function divide(num1: number, num2: number) {
    if (num2 == 0) {
        throw Error("cannot divide by zero");
    }
    return num1 / num2;
}
