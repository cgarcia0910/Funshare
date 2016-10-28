/**
 * Created by carlos on 16/08/16.
 */

  app.controller('main-controller', [ '$scope', 'reverseGeocode', '$ionicPopup', '$cordovaGeolocation', '$state', '$http', 'loginFactory', 'mainFactory', function($scope, reverseGeocode, $ionicPopup, $cordovaGeolocation, $state, $http, loginFactory, mainFactory) {

    var geocoder = new google.maps.Geocoder();
    var self = this;
    self.routePolyline = {};
    self.starterPosition = {};
    self.starterFormatedAddress = "";
    self.destinationPosition = {};
    self.destinationFormatedAddress = "";
    self.map = new google.maps.Map(document.getElementById("map"), {mapTypeId: google.maps.MapTypeId.ROADMAP});
    self.starterMarker = new google.maps.Marker({
      icon: "img/house-icon.png",
      animation: google.maps.Animation.DROP,
      animation: google.maps.Animation.DROP,
      draggable: true,
      map: self.map
    });
    google.maps.event.addListener(self.starterMarker, 'dragend', function() {
      self.starterPosition = self.starterMarker.getPosition();
      geocoder.geocode({'location': self.starterPosition}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            $scope.$apply(function () {
              self.starterFormatedAddress = results[0].formatted_address;
            });
          }
        }
      });
    });
    self.destinationMarker = new google.maps.Marker({
      icon: "img/flag-finish-icon.png",
      animation: google.maps.Animation.DROP,
      map: self.map
    });

    var sbStarterAddress = new google.maps.places.SearchBox(document.getElementById('starterAddress'), {});
    var sbDestinationAddress = new google.maps.places.SearchBox(document.getElementById('destinationAddress'), {});



    sbStarterAddress.addListener('places_changed', function () {
      var places = sbStarterAddress.getPlaces();
      if (places.length == 0)
        return;
      places.forEach(function (place) {
        self.starterPosition = place.geometry.location;
        self.starterMarker.setPosition(self.starterPosition);
      });
    });
    sbDestinationAddress.addListener('places_changed', function () {
      var places = sbDestinationAddress.getPlaces();
      if (places.length == 0)
        return;
      places.forEach(function (place) {
        self.destinationPosition = place.geometry.location;
        self.destinationMarker.setPosition(self.destinationPosition);
      });
    });
    $cordovaGeolocation.getCurrentPosition({timeout: 10000, enableHighAccuracy: true}).then(function (position) {
      self.starterPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      geocoder.geocode({'location': self.starterPosition}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0]) {
              self.starterFormatedAddress = results[0].formatted_address;
          }
        }
      });
      //self.map = new google.maps.Map(document.getElementById("map"), {center: self.starterPosition, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP});
      self.map.setCenter(self.starterPosition);
      self.map.setZoom(15);

      self.starterMarker.setPosition(self.starterPosition);
    }, function (error) {
      console.log(error);
    });
    self.map.addListener('click', function (event) {
      self.destinationPosition = event.latLng;
      self.destinationMarker.setPosition(self.destinationPosition);
      geocoder.geocode({'location': self.destinationPosition}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            $scope.$apply(function () {
              self.destinationFormatedAddress = results[0].formatted_address;
            })
          }
        }
      });
    });
    self.searchDrivers = function () {

      $state.go('main.routes', {
        startLat: self.starterPosition.lat(),
        startLng: self.starterPosition.lng(),
        endLat: self.destinationPosition.lat(),
        endLng: self.destinationPosition.lng()
      });
    }
  }]);
