
app.factory("preferencesFactory", function($http){
  var url = 'data/preferences.json';

  var listPreferences = {
    getPreferences: function(id){
      return $http.get(url)
        .then(function(response){
          console.log(response.data);
          return response.data;
        });
    }
  };
  return listPreferences;
});
