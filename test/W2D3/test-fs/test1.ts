import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pathToFile = join(__dirname, 'file.html');
const content = readFileSync(pathToFile);
console.log(pathToFile);

console.log(content);

const fileContent = await readFileSync(pathToFile);

console.log(fileContent);


