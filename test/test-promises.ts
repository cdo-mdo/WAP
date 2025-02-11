const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task Complete"), 2000);
});

promise.then(result => console.log(result));
