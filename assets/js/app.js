var webLugas = angular.module('webLugas', [
    'appControllers',
    'ngRoute',
    'ui.materialize'
]);

webLugas.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/home',{
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        when('/pro_illust',{
            templateUrl: 'partials/project_illust.html',
            controller: 'ProjectIllustController'
        }).
        when('/pro_photo',{
            templateUrl: 'partials/project_photo.html',
            controller: 'ProjectPhotoController'
        }).
          when('/work',{
            templateUrl: 'partials/work.html',
            controller: 'WorkController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);


