const palindromes = function (string) {
    return string.toLowerCase().replace(/\W/g, '').split('').reverse().join('') == 
    string.toLowerCase().replace(/\W/g, '')
};
// Do not edit below this line
module.exports = palindromes;
