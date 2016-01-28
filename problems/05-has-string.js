'use strict';

module.exports = function hasString(inputArray) {
  function checkString(element, index, array) {
    return typeof element == 'string';
  }
  return inputArray.some(checkString);
};
