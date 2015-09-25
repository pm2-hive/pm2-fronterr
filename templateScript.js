function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function makeCorsRequest(data) {
  var url = 'http://##IP##:##PORT##' + data;

  var xhr = createCORSRequest('POST', url);
  if (!xhr) {
    console.log('pm2-fronterr CORS not supported');
    return;
  }

  xhr.onload = function() {
    var text = xhr.responseText;
    console.log('Response from pm2-fronterr request: ' + text);
  };

  xhr.onerror = function() {
    console.log('Error making pm2-fronterr request');
  };

  xhr.send();
}

window.addEventListener('error', function(e) {
  var dataErr = '?msg=' + e.message + '&filename=' + e.filename + '&lineno=' + e.lineno;
  makeCorsRequest(dataErr);
});
$(document).ajaxError(function(e, request, settings) {
  var dataErr = '?status=' + request.status  + '&result=' + request.responseText;
  makeCorsRequest(dataErr);
});
