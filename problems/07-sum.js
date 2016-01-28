'use strict';

module.exports = function sum(numArray) {
  var total = 0;
  numArray.forEach(function(curr) {
    if (typeof curr === 'string') {
      total = total;
    } else if (typeof curr !== 'string') {
      total = curr + total;
    }
  });
  return total;
};
