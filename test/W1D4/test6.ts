const x = 1;

function f() {
    let y = 2;
    const sum = function() {
        const z = 3;
        const sum = x + y + z;
        console.log(x + y + z);
        console.log(sum);
    }; // inner function closes over free variables x, y
    // console.log(`after ${x} + ${y} + ${z}`)
    y = 10;
    return sum;
}

const g = f();
g();