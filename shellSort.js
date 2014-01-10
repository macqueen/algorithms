var shellSort = function(array) {
  var n = array.length;

  // 3x+1 increment
  var h = 1;
  while (h < n/3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (var i = h; i < n; i++) {
      for (var j = i; j >= h && lessThan(array[j], array[j-h]); j -= h) {
        var temp = array[j-h];
        array[j-h] = array[j];
        array[j] = temp;
      }
    }
    h = Math.floor(h/3);
  }
  return array;
};

var lessThan = function (a, b) {
  return a < b;
};
