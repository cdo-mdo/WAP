const fs = require('fs');
const EventEmitter = require('events');
const { nanoid } = require('nanoid');

class Names extends EventEmitter {
    #data;

    constructor(filePath) {
        super();
        this.filePath = filePath;

        try {
            // Read the JSON file synchronously and parse its content
            const fileContent = fs.readFileSync(this.filePath, 'utf8');
            this.#data = JSON.parse(fileContent);
        }
        catch (error) {
            // Initalize with an empty array if the file does not exist or is invalid
            this.#data = [];
        }
    }

    // private method to write data back to the file
    #persist() {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.#data, null, 2), 'utf8');
            this.emit('data_saved');
        }
        catch (error) {
            console.log('Error writing to file: ', error);
        }
    }

    // add a new name object to data
    addName(name: string) {
        const newName = {
            id: nanoid(),
            name
        }
        this.#data.push(newName);
        this.#persist();
        return newName;
    }

    // get all names
    getNames() {
        return this.#data;
    }

    // get name by ID
    getNameById(id) {
        const nameObj = this.#data.find(item => item.id === id);
        return nameObj ? nameObj.name : null;
    }

    // update a name by ID
    updateNameById(id, newName) {
        const nameObj= this.#data.find(item => item.id === id);
        if (nameObj) {
            nameObj.name = newName;
            this.#persist();
            return nameObj;
        }
        return null;
    }

    // Delete a name by ID
    deleteNameById(id) {
        const index = this.#data.findIndex(item => item.id === id);
        if (index !== -1) {
            const deleted = this.#data.splice(index, 1);
            this.#persist();
            return deleted[0];
        }
        return 0;
    }
}

const names = new Names('data.json');
names.on('data_saved', () => console.log('Data saved successfully!'));
names.addName('Bill');
console.log(names.getNames());
console.log(names.getNameById('tfHxMIRS-g7pX1rRLVzm0'));
names.updateNameById('_1KhwXOW0XVP1RdbYl2mt', 'Jane');
names.deleteNameById('59oCxDK3o5eTT1lL9XwtT');
