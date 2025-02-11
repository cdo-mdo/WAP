import { readFileSync } from 'node:fs';
import events from 'node:events';

class Names extends events {
    #data;

    constructor(fileName: string) {
        super();
        try {
            // Read the JSON file synchronously and parse its content
            const fileContent = readFileSync(fileName, 'utf-8');
            this.#data = JSON.parse(fileContent);
        } catch (error) {
            // Initialize with an empty array if the file does not exist or is invalid
            this.#data = [];
        }
    }

    // private method to write data back to the file
    
}
