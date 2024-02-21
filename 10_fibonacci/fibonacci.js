const fibonacci = function(num) {
    //Check for negative numbers
    if (num < 0) return 'OOPS'
    //Check the type of the argument, convert to number if necessary
    if (typeof num === 'string'){
        num = Number(num)
    }
    //Lets Fibonacci
    let a = 0
    let b = 1
    let c = 0
    //A little hardcoded but readable
    const fib = [0, 1]
    for (let i = 0; i < num; i++){
        c = a + b
        fib.push(c)
        a = b
        b = c
    }
    console.log(fib)
    return fib[num]

};

// Do not edit below this line
module.exports = fibonacci;
