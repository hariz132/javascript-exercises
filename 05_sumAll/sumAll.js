const sumAll = function(num1, num2) {
  // if num is < 0, or num is not a integer, return 'ERROR'
  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR';

  if (num1 > num2) { // set the lower number as num1
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  let result = 0;
  for (let i = num1; i <= num2; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
