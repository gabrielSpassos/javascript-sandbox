const fs = require('fs');
const crypto = require('crypto');

// crypt info
const encryptAlgorithm = 'aes-256-ctr';
const password = 'senha123456';

// crypt modules
const cipher = crypto.createCipher(encryptAlgorithm, password);
const decipher = crypto.createDecipher(encryptAlgorithm, password);

// file reader
const fileText = fs.readFileSync('test.txt', 'utf8');
console.log('Inicio:', fileText);

// encrypt
const crypted = cipher.update(fileText, 'utf8', 'hex');

writeFile('encrypted.txt',crypted);

const decryptedFileText = fs.readFileSync('encrypted.txt', 'utf8');

// decrypt
const decrypted = decipher.update(decryptedFileText, 'hex', 'utf8');

writeFile('result.txt', decrypted);

function writeFile(fileName, encryptedText) {
    fs.writeFile(`${fileName}`, encryptedText, (err) => {
        if(err) {
            console.log('Error on create file', err);
        }
    })
}
