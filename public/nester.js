var nester = function() {
  var functions = Array.prototype.slice.call(arguments);
  var result = functions.shift()();
  functions.forEach(function(func) {
    result = func(result);
  })
  return result;
}

module.exports = nester;