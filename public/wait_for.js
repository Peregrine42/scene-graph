var nester = require('./nester.js');

var wait_for = function() {
  var array = Array.prototype.slice.call(arguments);
  var func = array.shift();
  var deferrer = {};
  deferrer.chain = [];
  var new_func = function() {
    var args = Array.prototype.slice.call(arguments);
    var new_args = args.concat(array);
    return func.apply(null, new_args)
  };
  deferrer.chain.push(new_func);
  deferrer.and_call = function() {
    var array = Array.prototype.slice.call(arguments);
    var func = array.shift();
    var new_func = function() {
      var args = Array.prototype.slice.call(arguments);
      var new_args = args.concat(array);
      return func.apply(null, new_args)
    };
    deferrer.chain.push(new_func);
    return deferrer;
  },
  deferrer.go = function() {
    return deferrer.build.apply(this, this.chain);
  },
  deferrer.build = nester;
  return deferrer;
};

module.exports = wait_for;