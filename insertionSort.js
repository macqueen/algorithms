var insertionSort = function(array) {
  var n = array.length;
  for (var i = 0; i < n; i++) {
    for (var j = i; j > 0; j--) {
      if (lessThan(array[j], array[j-1])) {
        var temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
};

// helper compare funtion
var lessThan = function (a, b) {
  return a < b;
};
