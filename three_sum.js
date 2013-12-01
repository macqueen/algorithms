// given an array of numbers how many triples
// sum to zero?

// brute force method
var threeSum = function(numbers){
  var count = 0;
  for (var i = 0; i < numbers.length; i++){
    for (var j = i+1; j < numbers.length; j++){
      for (var k = j+1; k < numbers.length; k++){
        if(numbers[i] + numbers[j] + numbers[k] === 0){
          count++;
        }
      }
    }
  }
  return count;
};
