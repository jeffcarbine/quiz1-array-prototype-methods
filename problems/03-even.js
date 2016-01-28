'use strict';

module.exports = function even(numArray) {
  function isEven(value) {
     if (value%2 === 0) {
       return value;
     }
  }
  var filtered = numArray.filter(isEven);
  return filtered;
};
