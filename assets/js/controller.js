var appControllers = angular.module('appControllers', []);

appControllers.controller('PhoneListCtrl', function ($scope, $http) {
	$http.get('../assets/js/json/work.json').success(function(data){
		$scope.project = data;
	});
  
});