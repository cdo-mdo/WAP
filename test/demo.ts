const t1 = (s: string) => console.log(`execute t1 ${s}`);
const t2 = () => console.log(`execute t2`);
const i = () => console.log(`execute i`);

console.log(`1`);
const id = setTimeout(t2, 1000); // ms
console.log(`2`);
const id2 = setInterval(i, 1000);
setTimeout(t1, 900, "theo", "theo1");
console.log(`3`);
clearTimeout(id);
clearInterval(id2);




