console.log('start');
function foo() {
    return new Promise(resolve => resolve(`foo`));
}

async function bar() {
    console.log('bar-start');
    let result = await foo();
    console.log(result);
    console.log('bar-end');
}
bar();
console.log('end');

