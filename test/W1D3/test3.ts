console.log('start');

setTimeout(() => {
    console.log('Task Queue: setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('MicroTask Queue: Promise');
});

console.log('End');
