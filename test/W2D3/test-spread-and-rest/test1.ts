// Spread operator
const technologies = ['TypeScript', 'Node', 'React'];
const gainedKnowledge = ['HTML', 'CSS', ...technologies];
console.log(technologies);
console.log(gainedKnowledge);

// Rest Operator
const [father, mother, ...children] = ['George', 'Angel', 'Mada', 'Asaad', 'Mike'];
console.log(father);
console.log(mother);
console.log(children);

function sum(x, y, ...more) {
    let total = x + y;
    if (more.length) {
        more.forEach((extra) => total += extra);
    }
    console.log(total);
}
sum(1, 2, 3, 4, 5, 6);

function sumAll(...nums: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(sumAll(...[1, 2, 3, 4, 5, 6]));