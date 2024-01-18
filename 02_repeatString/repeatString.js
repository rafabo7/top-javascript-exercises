const repeatString = function(word, n) {
    finalString = ""
    if ( n < 0 ){
        return "ERROR"
    }
    for (let i = 1; i <= n; i++){
        finalString += word;
    }
    return finalString;


};

// Do not edit below this line
module.exports = repeatString;
