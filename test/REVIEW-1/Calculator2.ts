export default const add = (a: number, b: number) => a + b;
export const substract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => {
    if (b === 0) throw Error('cannot divide by 0');
    a / b;
}
