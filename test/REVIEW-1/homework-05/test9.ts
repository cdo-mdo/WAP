console.log(`start`);

const foo = async () => {
    console.log(`hi`);
    return foo; // return Promise.resolve(`foo`)
};

// foo().then(console.log);

console.log('end');
