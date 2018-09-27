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

// encrypt
const crypted = crypt(fileText);
console.log('Crypted', crypted);

writeFile('encrypted.txt',crypted);

const decryptedFileText = fs.readFileSync('encrypted.txt');
console.log('Decrypted', decryptedFileText);
const decrypted = decrypt(decryptedFileText);

writeFile('fim.txt', decrypted);

function crypt(textToCrypt) {
    return cipher.update(textToCrypt, 'utf8', 'hex');
}

function decrypt(textToDecrypt) {
    return decipher.update(textToDecrypt, 'hex', 'utf8');
}

function writeFile(fileName, encryptedText) {
    fs.writeFile(`./${fileName}`, encryptedText, (err) => {
        if(err) {
            console.log('Error on create file', err);
        }
    })
}
