// !!!IMPORTIANT!!!
// you need to import or include the http_getJSON file

weathersyncURL = 'https://weathersync.herokuapp.com';
/* loadipweather: preforms 2 API calles to weathersyncURL /{endpoint}
 * final data shoudl be weather at the given lat/long
 * Written By Spencer Bull May 2016
**/
function loadipweather() {
  getJSON(weathersynchURL + '/ip', true,
    function(err, data) {
      if (err !== null) {
        console.error("XMLHttpRequest Error: " + err);
      } else {
        var lat = data.ip.location.latitude;
        var long = data.ip.location.longitude;
        // Now that we have the long/lat, call the 2nd API
        getJSON(weathersynchURL + '/weather/$' + lat + ',$' + long, true,
          function(err, data){
            if (err !== null) {
              console.error("XMLHttpRequest Error: " + err);
            } else {
              // do what you want with the data from the 2nd API call here
              console.log(data);
            }
          });
      }
    });
}
