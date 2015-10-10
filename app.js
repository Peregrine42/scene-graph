var express = require('express');
var app = express();

app.get('/scene-graph-1', function(req, res){
  static_graph = {
    parent: "root",
    children: []
  }
  res
    .status(200)
    .set({ 'Content-Type': 'application/json' })
    .send(static_graph);
});

app.use(express.static('public'));

module.exports = app;