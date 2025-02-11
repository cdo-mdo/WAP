const emptyBuffer = Buffer.alloc(8); // allocate a buffer with 8 bytes
const buffer = Buffer.from('Hello'); // create a buffer of 5 bytes and fill it

console.log(buffer.toString());

buffer.write('ipp', 1);
console.log(buffer.toString());

