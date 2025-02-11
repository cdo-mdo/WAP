import { unlink } from 'node:fs/promises';
import { join } from 'node:path';

const pathToFile = join(__dirname, 'file.txt');

await unlink(pathToFile);