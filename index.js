var app = require('./app.js');

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);
})