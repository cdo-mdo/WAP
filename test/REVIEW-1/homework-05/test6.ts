const promise = new Promise((resolve, reject) => {
    console.log(`promise starts`);
    resolve(`promise result`); // return value
    reject(`error`);  // return error
    console.log(`promise ends`);
});

console.log(`code starts`);
promise.then(console.log).catch(console.error);
promise.catch(console.error);
console.log(`code ends`);
