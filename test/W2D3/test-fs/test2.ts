import { writeFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const pathToFile = join(__dirname, 'out.txt');

writeFileSync(pathToFile, 'Hello');

// await writeFile(pathToFile, 'Hello');

