var radio = require('radio');
var m = require('mithril');
var wait_for = require('./wait_for.js');
var http_wrapper = require('./http_wrapper.js');

var render = function(message) {
  console.log(message);
}

var good_sink = function(message) {
  radio('good').broadcast(message);
}

var bad_sink = function(message) {
  radio('bad').broadcast(message);
}

// get the scene graph
var server_path = '/scene-graph-1';

var incoming = wait_for(http_wrapper.get_json, server_path, good_sink, bad_sink);

wait_for(radio('good').subscribe)
  .and_call(function() {
    console.log('hi');
    console.log(message); })
  .and_call(render).go();

// show the root for now

// render
incoming.go();