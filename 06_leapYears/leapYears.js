const leapYears = function(year) {
  if (!(year % 4)) {
    if (!(year % 100) && year % 400) return false; // if divisible by 100, and not by 400
    return true;
  } 
  return false;
};

// Do not edit below this line
module.exports = leapYears;
