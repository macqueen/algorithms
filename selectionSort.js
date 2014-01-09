var selectionSort = function (array) {
  var n = array.length;
  for (var i = 0; i < n; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (lessThan(array[j], array[min])) {
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};

// helper compare funtion
var lessThan = function (a, b) {
  return a < b;
};
