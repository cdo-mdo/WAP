import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const pathToFile = join(__dirname, 'app.ts');

(async function() {
    const filecontent = await readFile(pathToFile);
    setTimeout(() => { console.log('timeout') }, 0);
    setImmediate(() => { console.log('immediate') });
    queueMicrotask(() => { console.log('microtask') });
    process.nextTick(() => console.log('nexttick'));

})();
