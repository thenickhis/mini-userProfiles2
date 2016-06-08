angular.module('userProfiles').controller('MainController', function($scope, mainService) {

	$scope.getUsers = function() {
  		mainService.getusers().then(function(response) {
  			$scope.users = response.data.data;
  		});
  	}
  $scope.getUsers();
});