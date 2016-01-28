'use strict';

module.exports = function highest(numArray) {
  function isNum(value) {
     if (typeof value == 'number') {
       return value;
     }
  }

  if (numArray.length > 0) {
    var filtered = numArray.filter(isNum);

    return filtered.reduce(function(previousValue, currentValue, currentIndex, array) {
      if (currentValue <= previousValue) {
        return previousValue;
      } else if (currentValue > previousValue) {
        return currentValue;
      }
    });
  } else {
    return null;
  }
};
