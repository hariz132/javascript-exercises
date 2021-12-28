const reverseString = function(str) {
  const charArray = str.split('');
  const reverseCharArray = [];
  for (char of charArray) {
    reverseCharArray.unshift(char);
  }
  return reverseCharArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
