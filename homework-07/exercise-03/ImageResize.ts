const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const cron = require('node-cron');

// Folder path
const inputFolder = path.join(__dirname, 'input');
const outputFolder = path.join(__dirname, 'output');

// Function to read filenames in a folder
function getFilenames(folderPath) {
    return fs.promises.readdir(folderPath).then(files => files.filter(
            file => file.endsWith('.jpg') || file.endsWith('.png')));
}

// Function to resize an image to thumbnail size and save it to output folder
async function resizeImage(filename) {
    const inputFilePath = path.join(inputFolder, filename);
    const outputFilePath = path.join(outputFolder, filename);

    try {
        await sharp(inputFilePath)
            .resize({ width: 200 })
            .toFile(outputFilePath);
        console.log(`Thumbnail created for: ${filename}`);    
    } catch (error) {
        console.error(`Error processing file ${filename}:`, error);
    }
}

// Main function to find differences and process images
async function processImages() {
    try {
        const inputFiles = await getFilenames(inputFolder);
        const outputFiles = await getFilenames(outputFolder);

        // Determine files in input but not in output
        const filesToProcess = inputFiles.filter(file => !outputFiles.includes(file));

        if (filesToProcess.length > 0) {
            console.log(`Processing ${filesToProcess.length} new files ...`);
            for (const file of filesToProcess) {
                await resizeImage(file);
            }
        }
        else {
            console.log('No new files to process.');
        }
    }
    catch (error) {
        console.log('Error processing images: ', error);            
    }
}

// Schedule the cron job
cron.schedule('*/30 * * * * *', async () => {
    console.log('Running image processing task ...');
    await processImages();
});

console.log('Cron job scheduled  to run every 30 seconds.');
