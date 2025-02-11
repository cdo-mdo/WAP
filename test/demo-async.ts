// async == change the return value to become async

async function foo() {
    console.log(`foo1`);
    console.log(`foo2`);
    console.log(`foo3`);
    return `result`; // promise.resolve(`result`) 
}

console.log(`start`);
const results = await foo();
console.log(`end`);