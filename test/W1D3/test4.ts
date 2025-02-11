console.log('Start');

process.nextTick(() => {
    console.log('process NextTick');
});

Promise.resolve().then(() => {
    console.log('Promise');
});

setTimeout(() => {
    console.log('Set Timeout');
}, 0);

console.log('end');
