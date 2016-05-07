
/**
 * getJSON function:
 * String url: requested query url
 * Boolean async: use async
 * string user: username for authentication (on use, else leave null)
 * String password: password for authentication (on use, else leave null)
 * Writen By Spencer Bull May 2016
 **/
var getJSON = function(url, async, callback) {
  var xmlreq = new XMLHttpRequest();
  xmlreq.open(url, async);
  xmlreq.type = "json";
  xmlreq.onload = function() {
    var status = xmlreq.status;
    // check status code. If you want to check for more create more if blocks
    if (status == 200) {
      // here you can get the response returned as a json object
      callback(xmlreq.response);
    } else { // error, so return status code
      // here you can check the returned status from the callback
      callback(status, null);
    }
  };
  // send the curreated get request
  xmlreq.send();
};
