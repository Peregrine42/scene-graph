var wait_for = require('../../public/wait_for.js');
var nester = require('../../public/nester.js');
var expect = require('expect.js');

describe('nester', function() {
  it('calls functions, passing each result to the next', function() {
    var one_function = function() { return 'one, ' };
    var two_function = function(x) { 
      return x + 'two, ' 
    }
    var three_function = function(x) { return x + 'three!' }
    
    expect(nester(one_function, two_function, three_function))
      .to.be('one, two, three!');
  })
})
