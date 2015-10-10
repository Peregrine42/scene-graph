var m = require('mithril');
var axios = require('axios');

var process = function(message) {
  return message.data;
}

var render = function(message) {
  console.log(message);
}

var get_error_message = function(message) {
  return 'foo ' + message;
}

var server_path = "/scene-graph-1";
var response = axios.get(server_path)
  .then(process)
  .then(render)
  .catch(get_error_message)
  .catch(render);