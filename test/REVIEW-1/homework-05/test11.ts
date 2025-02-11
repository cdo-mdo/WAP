console.log('start');
function foo() {
    return new Promise(resolve => resolve(`foo`));
}

async function bar() {
    console.log('bar-start');
    let result = await foo();
    console.log(result);
    console.log('bar-end');
    let result2 = await foo();
    console.log(result);
    console.log('bar-end2');
}
bar();
console.log('end');
