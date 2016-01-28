'use strict';

module.exports = function doubleArray(numArray) {
  var newArray = numArray.map(function(num){
    var double = num*2;
    return double;
  });
  return newArray;
};
