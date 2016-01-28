'use strict';

module.exports = function concatEach(strArray, prefix) {
  var newArray = strArray.map(function(str) {
    var member = (prefix + str);
    return member;
  });
  return newArray;
};
