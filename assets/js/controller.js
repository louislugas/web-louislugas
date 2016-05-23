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


//NOT WORKING--start
appControllers.controller('WorkController',['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http){
        $http.get('assets/json/project.json').success(function(data){
            $scope.work = data[$routeParams.id];
        });

       // $scope.rightClick = function(){
       //     $('.project').animate({
       //     	left: '-=150px',
       //     },500);
       // };

        //$scope.leftClick = function(){
        //    $('.project').animate({
        //        left: '+=150px',
        //    },500);
        //};
    }
]);
//NOT WORKING--end

appControllers.controller('ProjectIllustController', ['$scope', '$http',
    function($scope, $http){
        $http.get('assets/json/project_i.json').success(function(data){
            $scope.projectill = data;

        });
    }
]);

appControllers.controller('ProjectPhotoController', ['$scope', '$http',
    function($scope, $http){
        $http.get('assets/json/project_p.json').success(function(data){
            $scope.projectpho = data;

        });
    }
]);

