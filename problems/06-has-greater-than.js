'use strict';

module.exports = function hasGreaterThan(numArray, max) {
  function isBiggerThanMax(element, index, array) {
    return element > max;
  }
  return numArray.some(isBiggerThanMax);
};
