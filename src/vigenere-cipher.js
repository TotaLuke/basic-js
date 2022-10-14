const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  alph = [
    'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X',
    'Y', 'Z'
  ]

  encrypt(message, key) {
    try {
      key = key.padEnd(message.length, key).toUpperCase().split('');
      message = message.toUpperCase().split('');
      message.forEach((elem, index) => {
        if (this.alph.indexOf(elem) === -1) {
          key.splice(index, 0, ' ');
        }
      });
      key = key.splice(0, message.length);
      message = message.map((elem, index) => {
        if (this.alph.indexOf(elem) !== -1) {
          let curIndex = this.alph.indexOf(elem) + this.alph.indexOf(key[index]);
          if (curIndex > 25) {
            return this.alph[curIndex - 26];
          } else {
            return this.alph[curIndex];
          }
        } else {
          return elem;
        }
      })
      return this.type === true ? message.join('') : message.reverse().join('');
    } catch {
      throw new Error('Incorrect arguments!');
    }
  }

  decrypt(encryptedMessage, key) {
    try {
      key = key.padEnd(encryptedMessage.length, key).toUpperCase().split('');
      encryptedMessage = encryptedMessage.toUpperCase().split('');
      encryptedMessage.forEach((elem, index) => {
        if (this.alph.indexOf(elem) === -1) {
          key.splice(index, 0, ' ');
        }
      });
      key = key.splice(0, encryptedMessage.length);
      encryptedMessage = encryptedMessage.map((elem, index) => {
        if (this.alph.indexOf(elem) !== -1) {
          let curIndex = this.alph.indexOf(elem) - this.alph.indexOf(key[index]);
          if (curIndex < 0) {
            return this.alph[this.alph.indexOf(elem) + 26 - this.alph.indexOf(key[index])];
          } else {
            return this.alph[this.alph.indexOf(elem) - this.alph.indexOf(key[index])];
          }
        } else {
          return elem;
        }
      })
      return this.type === true ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
    } catch {
      throw new Error('Incorrect arguments!');
    }

  }
}

module.exports = {
  VigenereCipheringMachine
};
