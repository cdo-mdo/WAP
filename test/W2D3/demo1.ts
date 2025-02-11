import events from 'node:events';

class Home extends events {
    constructor() {
        super();
    }
}

const home = new Home();
home.on('raining', (temperature: number) => console.log(`it is raining with ${temperature} degrees`));
home.on('snowing', (temperature: number) => console.log(`it is snowing with ${temperature} degrees`));

setTimeout(() => {
    home.emit('raining', 35);
}, 1000);

setTimeout(() => {
    home.emit('raining', 4035);
    home.emit('snowing', 30);
}, 1000);