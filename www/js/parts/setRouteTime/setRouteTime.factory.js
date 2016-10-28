/**
 * Created by carlos on 11/08/16.
 */
app.factory("setRouteTimeFactory", function($http){
  var userData = {
    login: function (username, password) {
      var url = 'data/users/'+username+'.json';
      return $http.get(url)
        .then(function(response){
          if (response.data.password == password) {
            console.log(response.data);
            return response.data
          }
          else
            return {"msg": "User or password incorrect"};
        });
    }
  };
  return userData;
});
