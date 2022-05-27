const ftoc = function(temp) {
  let num = (temp - 32) * (5/9);
  return parseFloat(num.toFixed(1));
};

const ctof = function(temp) {
  let num = (temp * (9/5)) + 32;
  return parseFloat(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
