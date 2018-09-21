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

let crypted = crypt(fileText);
console.log(fileText);
console.log('Encryted: ', crypted);
console.log('Decrypted: ', decrypt(crypted));

function crypt(textToCrypt) {
    return cipher.update(textToCrypt, 'utf8', 'hex');
}

function decrypt(textToDecrypt) {
    return decipher.update(textToDecrypt, 'hex', 'utf8');
}