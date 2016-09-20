function UserController() {

  var ctrl = this;

	ctrl.username = '';

	ctrl.country = {
		name: {

		}
	};

  $scope.$watch(function () {
        return ctrl.username;
    }, function (newValue, oldValue) {
        console.log('Username is updated!');
    });


  $scope.$watch(function () {
        return ctrl.country;
  }, function (newValue, oldValue) {
        console.log('Country info is updated!');
    }, true);

  $scope.$watchCollection(function () {
        return ctrl.country.name;
  }, function (newValue, oldValue) {
        console.log('Country name is updated!');
    });
}




}

angular
	.module('app')
	.controller('UserController', UserController);