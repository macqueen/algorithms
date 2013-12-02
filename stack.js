// stack implementation with linked list
var linkedStack = function() {
  var stack = {};
  var first = null;

  var makeNode = function(value, next) {
    var node = {};
    node.item = value;
    node.next = next;
    return node;
  }

  stack.isEmpty = function() {
    return first === null;
  };

  stack.push = function(item) {
    var oldFirst = first;
    first = makeNode(item, oldFirst);
  };

  stack.pop = function() {
    if (!first) {
      throw "Unable to pop from an empty array!";
    } else {
      var item = first.item;
      first = first.next;
      return item;
    }
  };

  return stack;

};

// stack implementation with array
var arrayStack = function() {
  var stack = {};
  var _storage = [];
  var index = 0;

  stack.isEmpty = function() {
    return !index;
  };

  stack.push = function(item) {
    _storage[index] = item;
    index++;
  };

  stack.pop = function() {
    if (!index) {
      throw "Unable to pop from an empty array!";
    } else {
      var item = _storage[--index];
      // remove pointers to objects we don't need anymore
      _storage[index] = null;
      return item;
    }
  };

  return stack;
};
