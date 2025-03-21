export function add(a: number, b: number) {
    return a + b;
}

export function substract(a: number, b: number) {
    return a - b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function divide(a: number, b: number) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
