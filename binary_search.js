// given sorted array and value to search for
// return index or -1
var binarySearch = function(array, value) {
  var low = 0;
  var high = array.length - 1;
  var mid;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (value < array[mid]) {
      high = mid - 1;
    } else if (value > array[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return - 1;
};


var binarySearchRecursive = function(array, value, low, high) {
  low = low || 0;
  high = high || array.length - 1;
  var mid = Math.floor(low + (high - low) / 2);

  if (array[mid] === value) {
    return mid;
  } if (low >= high) {
    return - 1;
  } else if (value < array[mid]) {
    high = mid - 1;
  } else if (value > array[mid]) {
    low = mid + 1;
  }
  return binarySearchRecursive(array, value, low, high);
};
