/**
 * Created by carlos on 22/08/16.
 */
app.controller('routes-controller', function($scope, $state, $stateParams, routesFactory) {
  this.routes = [];
  this.idRouteSelected = '';
  var self = this;
  routesFactory.getRoutes($stateParams.startLat,$stateParams.startLng, $stateParams.endLat, $stateParams.endLng).then(function (response) {
    self.routes = response;
    console.log(self.routes);
  })
  console.log(this.routes);
  console.log("hei");
  console.log($stateParams.startLat)
});
