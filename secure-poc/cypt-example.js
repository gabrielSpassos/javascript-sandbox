const crypto = require('crypto');
const encryptAlgorithm = 'aes-256-ctr';
const password = 'senha123456';

const cipher = crypto.createCipher(encryptAlgorithm, password);
const decipher = crypto.createDecipher(encryptAlgorithm, password);

let crypted = crypt('Gabriel Passos');
console.log('Encryted: ', crypted);
console.log('Decrypted: ', decrypt(crypted));

function crypt(textToCrypt) {
    return cipher.update(textToCrypt, 'utf8', 'hex');
}

function decrypt(textToDecrypt) {
    return decipher.update(textToDecrypt, 'hex', 'utf8');
}