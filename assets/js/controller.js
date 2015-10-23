var appControllers = angular.module('appControllers', []);

appControllers.controller('HomeController', ['$scope', '$http',
    function ($scope, $http){
        $http.get('assets/js/json/home.json').success(function(data){
            $scope.slides = data;
        });
}]);

appControllers.controller('WorkController',['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('assets/js/json/' + $routeParams.idWork + '.json').success(function(data){
            $scope.project = data;
        });
}]);

appControllers.controller('ProjectController', ['$scope', '$http',
    function($scope, $http){
        $http.get('assets/js/json/project.json').success(function(data){
            $scope.project = data;
        });
}]);
