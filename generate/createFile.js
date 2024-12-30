const fs = require('fs')
const path = require('path')

async function createFile(filePath, content) {
    const directory = path.dirname(filePath);

    fs.mkdir(directory, content, (err) => {
        if (err) {
            console.error('Error creating file:', err);
        } else {
            console.log('File created successfully:', filePath);
        }
    })
}


module.exports = createFile