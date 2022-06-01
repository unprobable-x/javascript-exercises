const fibonacci = function(x) {
    let int = parseInt(x);
    let result = 0;
    if (int < 0) {
        result = "OOPS"
    } 
    else if (int == 1) {
        result = 1;
    }
    else {
        var i;
        var fib = [0, 1]; 
        
        for (i = 2; i <= int; i++) {
          fib[i] = fib[i - 2] + fib[i - 1];
         result = fib[int];
    }
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
