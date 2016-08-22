/**
 * Created by carlos on 29/07/16.
 */

angular.module('starter')
  .component('login', {
    templateUrl: 'js/components/login/login.template.html',
    controller: function LoginController() {
      this.user = 'carlos';
      this.password;
      this.confPassword;
      this.login = function () {
        console.log(this.user);
      }
    }
  });

/*
app.directive('login', function () {
  return {
    // Isolated scope binding
    scope: {
      message: '=',
      user: '',
      password: ''
    },
    // Inline template which is binded to message variable in the component controller
    templateUrl: '<div>Hello {{$ctrl.message}}</div>',
    // The controller that handles our component logic
    controller: function () {
      this.message = "Thomas directive"
    },
    //defaults, automatically set when using .component()
    controllerAs: '$ctrl',
    bindToController: true
  };
});
*/
/*
angular.module('starter').directive('ngSparkline', function() {
  return {
    restrict: 'A',
    template: '<div class="sparkline">hola</div>'
  }
});
*/
/*
app.directive('login', function () {
  return {
    templateUrl: 'js/components/login/login.template.html',
    bindToController: true
  }
})
*/
