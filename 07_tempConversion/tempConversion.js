const ftoc = function(f) {
  let c = (f - 32) * 5 / 9;
  return Math.round(c * 10) / 10;
  return +(Math.round(c + 'e+1') + 'e-1'); // alternative way using exponentiation
};

const ctof = function(c) {
  let f = c * 9 / 5 + 32;
  return Math.round(f * 10) / 10;
  return +(Math.round(f + 'e+1') + 'e-1'); // alternative way using exponentiation
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
