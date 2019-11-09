function UserController($scope) {
  var ctrl = this;
  this.username = '';

  this.country = {
    name: {

    }
  };

  $scope.$watch(function () {
    return ctrl.username;
  }, function (newValue, oldValue) {
    console.log('username changed');
  });

  $scope.$watch(function () {
    return ctrl.country;
  }, function (newValue, oldValue) {
    console.log('country info updated');
  },
  true);

  $scope.$watchCollection(function () {
    return ctrl.country.name;
  }, function (newValue, oldValue) {
    console.log(oldValue + " has been changed to " + newValue);
  });
}

angular
  .module('app')
  .controller('UserController', UserController);
