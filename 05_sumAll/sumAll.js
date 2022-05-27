const sumAll = function(x, y) {
    let a = Math.min(x, y);
    let b = Math.max(x,y);
    let finalSum = a;
    if (x < 0 || y < 0) {
        finalSum = 'ERROR';
    }
    else if (Number.isInteger(x) == false || Number.isInteger(y) == false) {
        finalSum = 'ERROR';
    }
    else {
        for (i = a+1; i <= b; i++) {
                finalSum += i;
            }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
