var wait_for = require('../../public/wait_for.js');
var expect = require('expect.js');

describe('wait_for', function() {
  xit('returns a function with an "and_call" method', function() {
    var result = wait_for();
    expect(typeof result).to.be('function');
  });
});