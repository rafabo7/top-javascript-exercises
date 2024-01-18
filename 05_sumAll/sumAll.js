const sumAll = function(min, max) {
    let result = 0

    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max) ) return "ERROR"

    if (min > max){
        [min, max] = [max, min]
    }

    for (min; min <= max; min++){
        result += min;
    }
    return result


};

// Do not edit below this line
module.exports = sumAll;
