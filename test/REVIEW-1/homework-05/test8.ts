setTimeout(() => console.log('setTimeout results'), 0);

const promise = new Promise((resolve) => resolve(`promise resolve`));

promise.then(console.log);

console.log('I love asynchronous programming');
