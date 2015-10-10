var wait_for = require('../../public/wait_for.js');
var expect = require('expect.js');

describe('wait_for', function() {
  it('creates a function pipeline', function() {
    var one_function = function() { return 'one, ' };
    var x_function = function(x, y, z) { return x + y + z + ', ' };
    var three_function = function(x) { return x + 'three!' }
    
    expect(wait_for(one_function)
      .and_call(x_function, 'tw', 'o')
      .and_call(three_function).go()
    ).to.be('one, two, three!');
  })
});
