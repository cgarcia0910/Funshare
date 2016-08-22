/**
 * Created by carlos on 18/08/16.
 */
/**
 * Created by carlos on 16/08/16.
 */

app.controller('tabs-controller', function($scope, $state, $location) {
  this.walker = $location.$$path == '/main/walker';
});
