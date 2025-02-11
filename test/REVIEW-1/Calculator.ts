export default function add(a: number, b: number): number {
    return a + b;
}

export function substract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b == 0) {
        throw Error('cannot divide by 0');
    }
    return a / b;
}
