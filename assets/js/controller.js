var appControllers = angular.module('appControllers', []);

appControllers.controller('HomeController', ['$scope', '$http',
    function ($scope, $http){
        $http.get('assets/json/home.json').success(function(data){
            $scope.slidesData = data;
        });
        $('.slider').slider({
            full_width: true,
        });
    }
]);

appControllers.controller('WorkController',['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('assets/js/json/' + $routeParams.idWork + '.json').success(function(data){
            $scope.project = data;
        });

        $scope.rightClick = function(){
            $('.project').animate({
            	left: '-=150px',
            },500);
        };

        $scope.leftClick = function(){
            $('.project').animate({
                left: '+=150px',
            },500);
        };
    }
]);

appControllers.controller('ProjectController', ['$scope', '$http',
    function($scope, $http){
        $http.get('assets/js/json/project.json').success(function(data){
            $scope.project = data;
        });
    }
]);
