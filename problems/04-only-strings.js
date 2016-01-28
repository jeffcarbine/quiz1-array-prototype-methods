'use strict';

module.exports = function onlyStrings(inputArray) {
  function isString(value) {
     if (typeof value == 'string') {
       return value;
     }
  }
  var filtered = inputArray.filter(isString);
  return filtered;
};
