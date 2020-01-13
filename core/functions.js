const { readdirSync, statSync, existsSync } = require('fs');
const CryptoJS = require('crypto-js');
const secretKey = require('../config/request/key.json');

module.exports = {
    getDirs : source =>
        readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name),
    getFiles : directoryPath => {
        var files = [];
        if(!existsSync(directoryPath)){
            return files;
        }
        readdirSync(directoryPath).forEach(file => {
            if(!statSync(directoryPath +'/'+ file).isDirectory()){
                files.push(file);
            }
        });
        return files;
    },
    trimExtension : file => {
        var n = file.lastIndexOf(".");
        return file.slice(0, n);
    },
    decryption: (_decryptString) => {
        let _key = CryptoJS.enc.Utf8.parse(secretKey);
        let _iv = CryptoJS.enc.Utf8.parse(secretKey);

        var decryptedString = CryptoJS.AES.decrypt(
            _decryptString, _key, {
            keySize: 64,
            iv: _iv,
            mode: CryptoJS.mode.CFB,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        return decryptedString;
    },
    encryption: (_dataToEncrypt) => {
        let _key = CryptoJS.enc.Utf8.parse(secretKey);
        let _iv = CryptoJS.enc.Utf8.parse(secretKey);

        let encrypted = CryptoJS.AES.encrypt(
            _dataToEncrypt, _key, {
            keySize: 64,
            iv: _iv,
            mode: CryptoJS.mode.CFB,
            padding: CryptoJS.pad.Pkcs7
        });

        return encrypted.toString();
    }
}