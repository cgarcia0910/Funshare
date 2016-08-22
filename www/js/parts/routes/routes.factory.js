/**
 * Created by carlos on 22/08/16.
 */
app.factory("routesFactory", function($http){
  var url = 'data/routes.json';

  var listRoutes = {
    getRoutes: function(startLat, startLng, endLat, endLng){
      return $http.get(url)
        .then(function(response){
          console.log(response.data);
          return response.data;
        });
    }
  };
  return listRoutes;
});
