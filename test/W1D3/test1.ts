const arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.push(6);

console.log(arr);

//////////////////////////////////////


const bigIntNum = 123456789n;
console.log(bigIntNum);

const anotherBigInt = BigInt(123456789);
console.log(anotherBigInt);

const id = Symbol('id');
console.log(id);

const anotherId = Symbol('id')
console.log(anotherId);

console.log(id == anotherId);


/////////////////////////////////////

console.log(5 == '5');
console.log(true == '1');
console.log(null == undefined);
console.log(0 == false);
console.log('' == false);

console.log(5 === '5');
console.log(true === '1');
console.log(null === undefined);
console.log(0 === false);
console.log('' === false);


//////////////////////////////////////////

try {
    const result = undefinedVar + 10;
}
catch (error) {
    console.log("An error orcurred:", error.message);
}

//////////////////////////////////////////

try {
    throw new Error('error is thrown');
}
catch (error) {
    console.error(error.message);
}

/////////////////////////////////////////

let a = 1;
let b = a;
a = 2;

console.log(`a = ${a}`);
console.log(`b = ${b}`);


//////////////////////////////////////////


const a1 = {name: "Asaad"};
const b1 = a1;
a1.name = "Theo";

console.log(`a1.name = ${a1.name}`);
console.log(`b1.name = ${b1.name}`);