const fs = require('fs');
const path = require('path');


function createFile(filePath, content) {
  
  const directory = path.dirname(filePath);

  
  fs.mkdirSync(directory, { recursive: true });

  // Write the content to the file
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log('File created successfully:', filePath);
    }

   
  });
}

module.exports = {
    createFile
};