// Spread Operator
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