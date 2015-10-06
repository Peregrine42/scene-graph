var http_wrapper = require("../../public/http_wrapper.js");
var sinon        = require("sinon");

describe("the ajax wrapper", function() {
  before(function() {
    server = sinon.fakeServer.create();
  })
  
  after(function() {
    server.restore();
  })
  
  it('calls the radio API with HTTP-requested content', function() {
    server.respondWith(
      "GET",
      "scene-graph-1",
      [ 200, 
        { "Content-Type": "application/json"},
        '{ "parent": null, "children": [] }'
      ]
    )
    var callback = sinon.spy();
    var error    = sinon.spy();
    http_wrapper.get_json("scene-graph-1", callback, error);
    server.respond();
    sinon.assert.calledWith(callback, {parent: null, children: []});
  });
});