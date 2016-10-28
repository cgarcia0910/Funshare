/**
 * Created by carlos on 23/08/16.
 */
app.factory("mainFactory", function($http){
  var url = 'https://maps.googleapis.com/maps/api/directions/json?';
  var apiKEY = 'AIzaSyC913pMi9p3sVW0Km_yATPIsueWNf0Bp5A&mode=driving';
  var cleanPoints = {
    getRoute: function (startLat, startLng, destinationLat, destinationLng) {
      return $http({
        method: 'GET',
        url: url + 'origin='+startLat+','+startLng+'&destination='+destinationLat+','+destinationLng+'&key='+apiKEY,
        header: {
          'Allow-Control-Allow-Origin': "*"
        }
      }).then(function(response){
        var points = response.data.routes[0].legs[0].steps;
        var cleanPoints = [];
        angular.forEach (points, function (value, key) {
          cleanPoints.push(value.start_location);
          cleanPoints.push(value.end_location);
        });
        return cleanPoints;
    });
  }
  };
  return cleanPoints;
});
