const os = require('os');

async function checkSystem() {
    return new Promise((resolve, reject) => {
        const totalmemory = os.totalmem(); // Total memory in bytes
        const coreCount = os.cpus().length; // Number of CPU cores

        // Check for memory (convert bytes to GB)
        const memoryInGB = totalmemory / (1024 * 1024 * 1024);
        if (memoryInGB < 8) {
            return reject('You need at least 8 GB of RAM');
        }

        // Check for processor cores
        if (coreCount < 4) {
            return reject('Processor must have at least 4 cores');
        }

        // If both check pass
        resolve(`System is checked successfully. CPU ${coreCount} cores and ${memoryInGB} GB RAM`);
    });
}

checkSystem()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })


