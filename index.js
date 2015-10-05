var express = require('express');
var app = express();

app.get('/scene-graph-1', function(req, res){
  static_graph = {
    parent: "root",
    children: []
  }
  res
    .status(200)
    .send(static_graph);
});

module.exports = app;