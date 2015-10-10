var nester = require('./nester.js');

var wait_for = function(func) {
  var deferrer = {};
  deferrer.chain = [func];
  deferrer.and_call = function(func) {
    var array = Array.prototype.slice.call(arguments);
    var func = array.shift();
    var new_func = function() {
      var args = Array.prototype.slice.call(arguments);
      var new_args = args.concat(array);
      return func.apply(null, new_args)
    };
    this.chain.push(new_func);
    return deferrer;
  },
  deferrer.go = function() {
    return deferrer.build.apply(this, this.chain);
  },
  deferrer.build = nester;
  return deferrer;
};

module.exports = wait_for;