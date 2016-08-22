/**
 * Created by carlos on 1/08/16.
 */
app.controller('login-controller', ['$scope', '$state', 'loginFactory', function ($scope, $state, loginFactory) {
  var pl = $scope;
  pl.errorMsg = '';
  pl.userData = {};
  pl.login = function () {
      console.log($state);

    loginFactory.login(pl.user, pl.password).then(function (response) {
      $state.go('main.walker', {});
      pl.userData = response;
      if (pl.userData.msg == undefined) {
        //cambiar de estado
        $state.go('main.walker', {});
        //$state.go('main');
      }
      else {
        pl.errorMsg = 'usuario o contraseña incorrecta';
      }
    }, function (error) {
      console.log(error.message);
      $scope.status = 'Unable to load preferences data: ' + error.message;
    })
  }
}]);
