var appControllers = angular.module('appControllers', []);

<<<<<<< HEAD
appControllers.controller('HomeController', ['$scope', '$http',
    function ($scope, $http){
        $http.get('assets/js/JSON/home.json').success(function(data){
            $scope.slides = data;
        });
}]);
=======
appControllers.controller('PhoneListCtrl', function ($scope, $http) {
	$http.get('../assets/js/json/work.json').success(function(data){
		$scope.project = data;
	});
  
});
>>>>>>> origin/master
