var wait_for = require('../../public/wait_for.js');
var expect = require('expect.js');

describe('wait_for', function() {
  xit('partially applies the given arguments', function() {
    var test_function = function(x) { return x; };
    var result = wait_for(test_function, 'bar');
    expect(result()).to.be('bar');
  });
  
  xit('returns an object defers execution of a function', function() {
    var target_function = function() { return 'bar'; };
    var result = wait_for(target_function).go();
    expect(result).to.be('bar');
  });
  
  it('returns an object that can be chained', function() {
    var one_function = function() { return 'one, ' };
    var two_function = function(x) { 
      return x + 'two, ' 
    }
    var three_function = function(x) { return x + 'three!' }
    
    var wait_for = function(func) {
      var deferrer = {};
      deferrer.chain = [func];
      deferrer.and_call = function(func) {
        this.chain.push(func);
        return deferrer;
      },
      deferrer.go = function() {
        return deferrer.build.apply(this, this.chain);
      }
      deferrer.build = function() {
        var functions = Array.prototype.slice.call(arguments);
        var result = functions.shift()();
        functions.forEach(function(func) {
          result = func(result);
        })
        return result;
      }
      return deferrer;
    }
    
    expect(three_function(two_function(one_function()))).to.be('one, two, three!')
    // expect(builder(one_function, two_function, three_function)).to.be('one, two, three!');
    expect(wait_for(one_function)
      .and_call(two_function)
      .and_call(three_function).go()
    ).to.be('one, two, three!')
  })
});

function get_func_arg(args) {
  var args = Array.prototype.slice.call(args);
  var func = args.shift();
  return [func, args]
}
