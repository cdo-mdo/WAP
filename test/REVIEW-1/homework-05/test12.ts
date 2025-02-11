async function foo() {
    try {
        const result = await new Promise((resolve, reject) => reject(false));
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

foo();
console.log(`finnish`);
