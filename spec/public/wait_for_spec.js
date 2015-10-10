var wait_for = require('../../public/wait_for.js');
var expect = require('expect.js');

describe('wait_for', function() {
  it('returns an object that can be chained', function() {
    var one_function = function() { return 'one, ' };
    var two_function = function(x) { 
      return x + 'two, ' 
    }
    var three_function = function(x) { return x + 'three!' }
    var x_function = function(x, y) { return x + y + ', ' };
    
    expect(three_function(two_function(one_function()))).to.be('one, two, three!')
    expect(wait_for(one_function)
      .and_call(two_function)
      .and_call(three_function).go()
    ).to.be('one, two, three!')
    expect(wait_for(one_function)
      .and_call(x_function, 'two')
      .and_call(three_function).go()
    ).to.be('one, two, three!')
  })
});

describe('currying', function() {
  it('sorts everything out', function() {
    var a_function = function(a, b) { return a + ' + ' + b };
    var result = a_function.bind(null, 'foo');
    expect(result('fio')).to.be('foo + fio')
  })
  
  it('works', function() {
    var a_function = function(a, b, c) { return a + ' + ' + b + ' = ' + c };
    
    var array = ['foo', 'fio'];
    var result = function() {
      var args = Array.prototype.slice.call(arguments);
      var new_args = array.concat(args);
      return a_function.apply(null, new_args)
    };
    expect(result('bar')).to.be('foo + fio = bar')
  })
});