http_wrapper = {
  get_json: function(url, callback, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(url))
    xhr.onload = function() {
      var content_type = xhr.getResponseHeader('content-type');
      if (xhr.status === 200 && content_type === "application/json") {
        var response = JSON.parse(xhr.response);
        callback(response);
      } else {
        error(xhr.status);
      }
    }
    xhr.send();
  }
}

module.exports = http_wrapper;