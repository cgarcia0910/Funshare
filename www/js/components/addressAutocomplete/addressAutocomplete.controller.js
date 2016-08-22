app.controller('addressAutocomplete-controller', function(NgMap) {
  var vm = this;
  vm.types = "['address']";
  vm.placeChanged = function() {
    vm.place = this.getPlace();
    vm.map.setCenter(vm.place.geometry.location);
  }
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });
});
