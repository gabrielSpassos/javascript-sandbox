const path = require('path');

const replaceFileExtension = (filename, newFileExtension) => {
    let fileExtension = path.extname(filename);
    return filename.replace(fileExtension, newFileExtension)
}

let filename = 'music.mp3';
let newFileExtension = '.mp4';

let newFilename = replaceFileExtension(filename, newFileExtension);
console.log(newFilename);
