const palindromes = function (str) {
    const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    return cleanString == cleanString.split("").reverse().join("")
};







// Do not edit below this line
module.exports = palindromes;
