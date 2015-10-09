var http_wrapper = require("../../public/http_wrapper.js");
var sinon        = require("sinon");

describe("the ajax wrapper", function() {
  before(function() {
    server = sinon.fakeServer.create();
  })
  
  after(function() {
    server.restore();
  })
  
  it('passes the content of a HTTP GET to a callback', function() {
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
  
  context('when the wrong content is requested', function() {
    it('passes the status code to an error callback', function() {
      server.respondWith(
        "GET",
        "bad-request",
        [ 501, "headers", "body"]
      )
      
      var callback = sinon.spy();
      var error    = sinon.spy();
      http_wrapper.get_json("bad-request", callback, error);
      server.respond();
      sinon.assert.calledWith(error, 501);
    });
  });
});