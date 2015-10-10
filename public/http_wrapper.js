http_wrapper = {
  get_json: function(url, callback, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(url))
    xhr.onload = function() {
      var content_type = xhr.getResponseHeader('content-type');
      if (xhr.status === 200) {
        if (content_type === "application/json") {
          var response = JSON.parse(xhr.response);
          callback(response);
        } else {
          error('content-type is not json!');
        }
      } else {
        error(xhr.status + " " + xhr.statusText);
      }
    }
    xhr.send();
  }
}

module.exports = http_wrapper;