// n is the number of elements in the network
var quickFind = function (n) {
  var network = {};


// set id of each object to itself to start
  var _ids = [];
  for (var i = 0; i <= n; i++){
    _ids.push(i);
  }

// check whether a and b are linked
  network.connected = function(a, b){
    return _ids[a] === _ids[b];
  };

// change entries that are linked to a to be linked to b
  network.union = function(a, b){
    var aId = _ids[a];
    var bId = _ids[b];
    for (var i = 0; i < _ids.length; i++){
      if(_ids[i] === aId) {
        _ids[i] = bId;
      }
    }
  };

  return network;
};


var quickUnion = function (n) {
  var network = {};

  var _ids = [];
  for (var i = 0; i <= n; i++){
    _ids.push(i);
  }

// helper function to traverse tree structure until
// you reach parent node
  var root = function(num){
    while(num !== _ids[num]) {
      num = _ids[num];
    }
    return num;
  };

  network.connected = function(a, b){
    return root(a) === root(b);
  };

  network.union = function(a, b){
    var x = root(a);
    var y = root(b);
    _ids[x] = y;
  };

  return network;
};


var weightedQuickUnion = function (n) {
  var network = {};

  var _ids = [];
  var _sizes = [];
  for (var i = 0; i <= n; i++){
    _ids.push(i);
    _sizes.push(1);
  }

  var root = function(num){
    while(num !== _ids[num]) {
      num = _ids[num];
    }
    return num;
  };

  network.connected = function(a, b){
    return root(a) === root(b);
  };

// modify union to link root of smaller tree to root
// of larger tree
  network.union = function(a, b){
    var x = root(a);
    var y = root(b);
    if(_sizes[x] < _sizes[y]){
      _ids[x] = y;
      _sizes[x] += _sizes[y];
    } else {
      _ids[y] = x;
      _sizes[y] += _sizes[x];
    }
  };

  return network;
};


var weightedQuickUnionPath = function (n) {
  var network = {};

  var _ids = [];
  var _sizes = [];
  for (var i = 0; i <= n; i++){
    _ids.push(i);
    _sizes.push(1);
  }

// modify helper function to have nodes point to
// grandparent, halving path length
  var root = function(num){
    while(num !== _ids[num]) {
      _ids[num] = _ids[_ids[num]];
      num = _ids[num];
    }
    return num;
  };

  network.connected = function(a, b){
    return root(a) === root(b);
  };

  network.union = function(a, b){
    var x = root(a);
    var y = root(b);
    if(_sizes[x] < _sizes[y]){
      _ids[x] = y;
      _sizes[x] += _sizes[y];
    } else {
      _ids[y] = x;
      _sizes[y] += _sizes[x];
    }
  };

  return network;
};
