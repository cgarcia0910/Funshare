// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//, 'ngCordova', 'AngularReverseGeocode', 'ngCordova.plugins.geolocation', 'ngCordova.plugins.backgroundGeolocation'
var app = angular.module('starter', ['ionic', 'starter.controllers', 'ngLodash', 'ui.router', 'ngCordova', 'AngularReverseGeocode', 'ngCordova.plugins.geolocation'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
    url: '/login',
    templateUrl: 'js/parts/login/login.template.html'
  })

  .state('main', {
    url: '/main',
    abstract: true,
    controller: 'tabs-controller',
    controlleAs: 'tc',
    templateUrl: 'js/parts/tabs/tabs.template.html'
    //controller: 'AppCtrl'
  })
  .state('main.walker', {
    url: '/walker',
    views: {
      'tabContent': {
        controller: 'main-controller',
        controllerAs: 'mcon',
        templateUrl: 'js/parts/main/main.template.html'
      }
    }
  })
  .state('main.routes', {
    url: '/routes',
    params: {
      startLat: null,
      startLng: null,
      endLat: null,
      endLng: null
    },
    views: {
      'tabContent': {
        controller: 'routes-controller',
        controllerAs: 'rc',
        //controller: 'routes-controller',
        //controllerAs: 'rc',
        templateUrl: 'js/parts/routes/routes.template.html'
      }
    }
  })
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
//angular.module('starter.controllers', ['ngLodash'])
