/**
 * Created by carlos on 1/08/16.
 */
app.controller('preferences-controller', ['$scope', 'lodash', 'preferencesFactory', function ($scope, lodash, preferencesFactory) {
  /*
  $scope.allPreferencesList = [
    {"name": "motociclismo"},
    {"name": "atletismo"},
    {"name": "videojuegos"},
    {"name": "musica"}
  ];*/
  var pl = $scope;
  pl.allPreferencesList = [];
  $scope.allPreferencesList = [];
  preferencesFactory.getPreferences().then(function (response) {
    console.log(response);
    pl.allPreferencesList = response;
  }, function (error) {
    console.log(error.message);
    $scope.status = 'Unable to load preferences data: '+error.message;
  });
  $scope.userPreferencesList = [];
  $scope.searchText;
  $scope.select = function (preference) {
    $scope.userPreferencesList = $scope.userPreferencesList.concat(preference);
    $scope.allPreferencesList = lodash.difference($scope.allPreferencesList, $scope.userPreferencesList);
  };
  $scope.unselect = function (preference) {
    $scope.allPreferencesList = $scope.allPreferencesList.concat(preference);
    $scope.userPreferencesList = lodash.difference($scope.userPreferencesList, $scope.allPreferencesList);
  };
}]);
