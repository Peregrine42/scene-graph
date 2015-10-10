var m = require('mithril');
var http_wrapper = require('./http_wrapper.js');

var render = function(message) {
  console.log(message);
}

var server_path = "/scene-graph-1";
http_wrapper.get_json(server_path, render, render);
