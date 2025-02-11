console.log('start');
function foo() {
    return new Promise(resolve => resolve(`foo`));
}
async function bar1() {
    console.log('bar-start');
    let result = await foo();
    console.log(result);
    console.log('bar-end');
}
bar1();
console.log('end');
