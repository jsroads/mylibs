import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('Appstart')
export class Appstart extends Component {
    start() {
        var data = [{id: 1}, {id: 2}]

// Encrypt
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

// Decrypt
        var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        console.log(decryptedData); // [{id: 1}, {id: 2}]
    }

    update(deltaTime: number) {
        
    }
}

