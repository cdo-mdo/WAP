import {join} from 'node:path';

const path = join('this', 'is', 'a', 'path');
const pathToFile = join(__dirname, 'file.txt');

console.log(path);
console.log(pathToFile);