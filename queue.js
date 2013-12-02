// linked list queue implementation
var linkedQueue = function() {
  var queue = {};
  var first = null;
  var last = null;

  var makeNode = function(value) {
    var node = {};
    node.item = value;
    node.next = null;
    return node;
  };

  queue.isEmpty = function() {
    return first === null;
  };

  queue.enqueue = function(item) {
    var oldLast = last;
    last = makeNode(item);
    if (queue.isEmpty()) {
      first = last;
    } else {
      oldLast.next = last;
    }
  };

  queue.dequeue = function() {
    if (!first) {
      throw "Unable to dequeue an empty queue."
    }
    var item = first.item;
    first = first.next;
    if (queue.isEmpty()) {
      last = null;
    }
    return item;
  }

  return queue;
};
