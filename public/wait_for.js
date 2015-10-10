var nester = require('./nester.js');

var wait_for = function() {
  var array = Array.prototype.slice.call(arguments);
  var func = array.shift();
  var partially_applied = partial_maker(arguments, array, func)
  
  var deferrer = {};
  deferrer.chain = [];
  deferrer.and_call = function() {
    var array = Array.prototype.slice.call(arguments);
    var func = array.shift();
    var partially_applied = partial_maker(arguments, array, func)
    deferrer.chain.push(partially_applied);
    return deferrer;
  },
  deferrer.go = function() {
    return deferrer.build.apply(this, this.chain);
  },
  deferrer.build = nester;
  
  deferrer.chain.push(partially_applied);
  return deferrer;
};

function partial_maker(arguments, array, func) {
  var result = function() {
    var args = Array.prototype.slice.call(arguments);
    var new_args = args.concat(array);
    return func.apply(null, new_args)
  };
  return result;
}

function deferrer_maker() {
  
}

module.exports = wait_for;