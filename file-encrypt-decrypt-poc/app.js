require('dotenv').load();
const fs = require('fs');
const crypto = require('crypto');
const q = require('q');

const FILENAME = process.env.FILENAME || 'test.txt';

// crypt info
const encryptAlgorithm = 'aes-256-ctr';
const password = 'senha123456';

// crypt modules
const cipher = crypto.createCipher(encryptAlgorithm, password);
const decipher = crypto.createDecipher(encryptAlgorithm, password);

readFile(FILENAME, 'utf8')
    .then((fileText) => {
        console.log('STEP 1 - Without encryption:', fileText);
        return encrypt(fileText, 'utf8', 'hex')
    }).then((encrypted) => {
        console.log('STEP 2 - After encryption', encrypted);
        return writeFile('encrypted.txt', encrypted)
    }).then(() => {
        console.log('STEP 3 - Finish process of encryption');
        return readFile('encrypted.txt', 'utf8')
    }).then((fileText) => {
        console.log('STEP 4 - With encryption:', fileText);
        return decrypt(fileText, 'hex', 'utf8')
    }).then((decrypted) => {
        console.log('STEP 5 - After decryption', decrypted);
        return writeFile('decrypted.txt', decrypted)
    }).then(() => console.log('STEP 6 - Finish process of decryption'));

function readFile(fileName, encoding){
    const deferred = q.defer();
    fs.readFile(fileName, encoding, (err, fileName) => {
       deferred.resolve(fileName)
    });
    return deferred.promise;
}

function writeFile(fileName, encryptedText){
    const deferred = q.defer();
    fs.writeFile(fileName, encryptedText, () => {
        deferred.resolve(true)
    });
    return deferred.promise;
}

function encrypt(text, inputEncoding, outputEncoding) {
    return cipher.update(text, inputEncoding, outputEncoding);
}

function decrypt(text, inputEncoding, outputEncoding) {
    return decipher.update(text, inputEncoding, outputEncoding);
}