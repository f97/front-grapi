const alphabets = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
const base = alphabets.length;

/**
 * Taken from
 * https://github.com/delight-im/ShortURL/blob/master/JavaScript/ShortURL.js
 *
 * @param num
 * @returns returns shortened code that maps to the database
 */
const encode = (num) => {
    let code = '';
    while (num > 0) {
        code = alphabets.charAt(num % base) + code;
        num = Math.floor(num / base);
    }
    return code;
};

/**
 * Taken from
 * https://github.com/delight-im/ShortURL/blob/master/JavaScript/ShortURL.js
 *
 * @param code
 * @returns ID in database
 */
const decode = (code) => {
    let num = 0;
    for (let i = 0; i < code.length; i++) {
        num = num * base + alphabets.indexOf(code.charAt(i));
    }
    return num;
};


console.log(encode(64));