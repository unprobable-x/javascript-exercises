const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
  return x - y;
};

const sum = function(a) {
	return a.reduce(add, 0); 
  function add(accumulator, x) {
    return accumulator + x;
  }
};

const multiply = function(a) {
  return a.reduce(mult, 1); 
  function mult(accumulator, x) {
    return accumulator * x;
  }
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
    var array = [];
    for (i = 1; i <= x; i++) {
      array.push(i);
    }  
    return array.reduce(function(a, b) {
      return a * b;
    },1)
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
