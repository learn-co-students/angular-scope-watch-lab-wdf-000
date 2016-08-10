function UserController($scope) {
  var ctrl = this;

	ctrl.username = '';

	ctrl.country = {
		name: {
      short: '',
      full: ''
		},
    population: ''
	};

  $scope.$watch(
    function(){
      return ctrl.username;
    },
    function(newVal,oldVal){
      console.log(newVal,oldVal);
    }
  );
  $scope.$watch(
    function(){
      return ctrl.country;
    },
    function(newVal,oldVal){
      console.log(newVal,oldVal);
    },
    true
  );
}

angular
	.module('app')
	.controller('UserController', UserController);
